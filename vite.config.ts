import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    modulePreload: false,
    polyfillModulePreload: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("vite/preload-helper") || id.includes("\0vite")) {
            return "vendor";
          }
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three") || id.includes("three-mesh-bvh") || id.includes("three-stdlib")) {
              return "three-bundle";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/react-router") ||
              id.includes("/scheduler/") ||
              id.includes("@radix-ui")
            ) {
              return "vendor";
            }
          }
        },
      },
    },
  },
}));

