import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import inject from "@rollup/plugin-inject"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
	//assetsInclude: ["**/tlsn-js/build/*.wasm"],
	publicDir: "dist",
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: "node_modules/tlsn-js/build/*",
					dest: ".",
				},
			],
		}),
		nodePolyfills({
			include: ["buffer"],
			globals: {
				Buffer: true,
			},
		}),
	],
	server: {
		proxy: {
			"/*": {
				target: "https://127.0.0.1:4443/",
				changeOrigin: true,
				configure: (proxy, options) => {
					options.headers = {
						"Cross-Origin-Embedder-Policy": "require-corp",
						"Cross-Origin-Opener-Policy": "same-origin",
					}
				},
			},
		},
		https: { key: "../common/fixture/tls/privkey1.pem", cert: "../common/fixture/tls/cert1.pem" },
		host: "local.proof.markets",
		port: 4443,
		cors: false,
		headers: {
			"Cross-Origin-Embedder-Policy": "require-corp",
			"Cross-Origin-Opener-Policy": "same-origin",
		},
		fs: {
			strict: false,
		},
	},
	build: {
		target: "esnext",
		minify: true,
		sourcemap: true,
	},
})
