import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import inject from '@rollup/plugin-inject';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  //assetsInclude: ["**/tlsn-js/build/*.wasm"],
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/tlsn-js/build/*.wasm',
          dest: 'packages/dapp/public'
        }
      ]
    }),
            nodePolyfills({
      include: ["buffer"],
      globals: {
        Buffer: true,
      },
    }),
           
           ],
           preview: {
            proxy: {
              "/*": {
                target: 'http://127.0.0.1:4173/',
                changeOrigin: true,
                configure: (proxy, options) => {
                  options.headers = {
                    "Cross-Origin-Embedder-Policy": "require-corp",
                    'Cross-Origin-Opener-Policy': 'same-origin',
                  }
                },
              },
            },
            headers: {
              'Cross-Origin-Embedder-Policy': 'require-corp',
              'Cross-Origin-Opener-Policy': 'same-origin',
            },
           },
  server: {
    host: '127.0.0.1',
    port: 3000,
    cors: false,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
    fs: {
      strict: false,
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
    minify: true,
    sourcemap: true,
    rollupOptions: {
      plugins: [
        inject({
          // cbor-x checks for Buffer on the global object, and the polyfills plugin doesn't cover this case for the
          // production build (but works in development because Buffer gets injected as a banner, so it's "naturally"
          // available on the global object)
          "globalThis.Buffer": ["buffer", "Buffer"],
        }),
      ],
    },
  },
});
