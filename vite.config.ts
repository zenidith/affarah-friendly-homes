import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure public directory is served at root
  publicDir: 'public',
  // Force Vite to correctly resolve paths in the public directory
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
