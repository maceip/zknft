import type { Canvas } from "@canvas-js/core"

declare global {
	interface Window {
		app: Canvas
	}
}
