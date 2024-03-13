import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(),
            nodePolyfills({
      include: ["buffer"],
      globals: {
        Buffer: true,
      },
    }),
           
           ],
  server: {
    port: 3000,
    fs: {
      strict: false,
    },
  },
  build: {
    target: "es2022",
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
