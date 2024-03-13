import { useRef, useState, useEffect } from "react"
import { PrivateKeyAccount } from "viem/accounts"

import { AppConnectionStatus, CanvasEvents, Connections } from "@canvas-js/core"
import { useCanvas, useLiveQuery } from "@canvas-js/hooks"
import { SIWESignerViem } from "@canvas-js/chain-ethereum-viem"

import { Message } from "./Chat"

export const ChatInstance = ({ topic, left, account }: { topic: string; left: number; account: PrivateKeyAccount }) => {
	const [status, setStatus] = useState<AppConnectionStatus>("disconnected")
	const [connections, setConnections] = useState<Connections>({})

	const [chatOpen, setChatOpen] = useState(true)
	const [peersByTopic, setPeersByTopic] = useState<Record<string, string[]>>({})
	const scrollboxRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const { app } = useCanvas({
		contract: {
			models: {
				message: {
					id: "primary",
					content: "string",
					address: "string",
					timestamp: "integer",
				},
			},
			actions: {
				createMessage: (db, { content }, { id, address, timestamp }) => {
					db.set("message", { id, content, address, timestamp })
				},
			},
			topic,
		},
		signers: [new SIWESignerViem({ signer: account })],
		indexHistory: false,
		discoveryTopic: "canvas-discovery",
		bootstrapList: [
			"/dns4/canvas-chat-discovery-p0.fly.dev/tcp/443/wss/p2p/12D3KooWG1zzEepzv5ib5Rz16Z4PXVfNRffXBGwf7wM8xoNAbJW7",
			"/dns4/canvas-chat-discovery-p1.fly.dev/tcp/443/wss/p2p/12D3KooWNfH4Z4ayppVFyTKv8BBYLLvkR1nfWkjcSTqYdS4gTueq",
			"/dns4/canvas-chat-discovery-p2.fly.dev/tcp/443/wss/p2p/12D3KooWRBdFp5T1fgjWdPSCf9cDqcCASMBgcLqjzzBvptjAfAxN",
		],
	})

	const messages = useLiveQuery<Message>(app, "message", {
		orderBy: { timestamp: "asc" },
	})
	useEffect(() => {
		const scroller = scrollboxRef.current
		if (!scroller) return
		scroller.scrollTop = scroller.scrollHeight
	}, [messages?.length])

	// who am i directly connected to?
	useEffect(() => {
		const handleConnectionsUpdated = ({ detail: { status, connections } }: CanvasEvents["connections:updated"]) => {
			setStatus(status)
			setConnections(connections)
		}
		app?.addEventListener("connections:updated", handleConnectionsUpdated)
		return () => {
			app?.removeEventListener("connections:updated", handleConnectionsUpdated)
		}
	}, [app])

	// who's online right now?
	useEffect(() => {
		const handlePresenceChange = ({ detail: { peers } }: CanvasEvents["presence:join"] | CanvasEvents["presence:leave"]) => {
			const results: Record<string, string[]> = {}
			Object.values(peers).forEach((peerInfo) => {
				if (peerInfo.env !== "browser") return
				peerInfo.topics.map((topic) => {
					results[topic] = results[topic] || []
					results[topic].push(peerInfo.peerId.toString())
				})
			})
			setPeersByTopic(results)
		}
		app?.addEventListener("presence:join", handlePresenceChange)
		app?.addEventListener("presence:leave", handlePresenceChange)
		return () => {
			app?.removeEventListener("presence:join", handlePresenceChange)
			app?.removeEventListener("presence:leave", handlePresenceChange)
		}
	}, [app])

	// bind global hotkey for opening/closing chat
	const toggleChatOpen = () => {
		setChatOpen((open) => !open)
		window.requestAnimationFrame(() => {
			setTimeout(() => {
				if (scrollboxRef.current) scrollboxRef.current.scrollTop = scrollboxRef.current.scrollHeight
			}, 10)
		})
	}
	useEffect(() => {
		const keyup = (e: KeyboardEvent) => {
			if ((e.code === "Enter" && (e.target as HTMLInputElement).nodeName !== "INPUT") || e.code === "Escape") {
				toggleChatOpen()
			}
		}
		document.addEventListener("keyup", keyup)
		return () => document.removeEventListener("keyup", keyup)
	}, [app])

	return (
		<div
			style={{
				border: "1px solid",
				borderBottom: "none",
				background: "#fff",
				position: "fixed",
				bottom: 0,
				left,
				width: 280,
			}}
		>
			<div
				style={{
					width: "100%",
					padding: 10,
					paddingBottom: 6,
				}}
				onClick={() => toggleChatOpen()}
				title={
					app?.peerId +
					"\n---\n" +
					Object.entries(connections)
						.map(
							([peer, { status, connections }]) =>
								`${connections.length > 0 ? connections[0].remoteAddr.toString() : peer}: ${status}`,
						)
						.join("\n")
				}
			>
				{topic} ({status === "disconnected" ? "Connecting..." : "Connected"})
				<br />
				{Object.entries(connections).map(([addr, { status, connections }]) => {
					return (
						<div key={addr}>
							{connections[0]?.remoteAddr.decapsulateCode(421).toString()}: {status}
						</div>
					)
				})}
			</div>
			<div
				style={{
					padding: 10,
					paddingTop: 0,
				}}
			>
				{peersByTopic[`canvas/${topic}`]?.length || 0} other browsers
			</div>
			{chatOpen && (
				<div>
					<div
						style={{
							borderTop: "1px solid",
							padding: 10,
							height: 250,
							overflowY: "scroll",
						}}
						ref={scrollboxRef}
					>
						{(messages || []).map((message) => (
							<div key={message.id as string}>
								{message.address.slice(9, 15)}: {message.content}
							</div>
						))}
					</div>
					<form
						style={{ padding: 10 }}
						onSubmit={async (event) => {
							event.preventDefault()

							const content = inputRef.current?.value
							if (!app || !content || !content.trim() || status !== "connected") return

							app.actions.createMessage({ content }).then(() => {
								if (inputRef.current) {
									inputRef.current.value = ""
								}
							})
						}}
					>
						<input
							autoFocus
							ref={inputRef}
							type="text"
							placeholder="Send a message"
							onKeyPress={(e) => {
								e.stopPropagation()
							}}
						/>{" "}
						<input
							type="submit"
							value={status !== "connected" ? "Connecting..." : "Send"}
							disabled={!app || status !== "connected"}
						/>
					</form>
				</div>
			)}
		</div>
	)
}
