import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inject from '@rollup/plugin-inject'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/tlsn-js/build/b0eac407bfb6403d3965.wasm',
          dest: '.',
        },
  
  ],
}),],
  server: {
    port: 3000,
    cors: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
    fs: {
      strict: false,
    },
  },
  publicDir: 'assets',

  build: {
    target: "es2022",
    minify: true,
    sourcemap: true,
    rollupOptions: {
		//	plugins: [inject({	modules: { Buffer: ['buffer', 'Buffer'] }
   // })],
		},
  },
});
