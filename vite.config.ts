import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@splinetool/react-spline", "@splinetool/runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Heavy 3D runtime — loaded lazily, cached separately
          spline: ["@splinetool/react-spline", "@splinetool/runtime"],
          // Core vendor libs
          vendor: ["react", "react-dom", "react-router-dom"],
          // UI primitives
          radix: [
            "@radix-ui/react-tooltip",
            "@radix-ui/react-toast",
            "@radix-ui/react-dialog",
            "@radix-ui/react-accordion",
          ],
        },
      },
    },
  },
}));