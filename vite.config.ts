/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(),

  ],

  // Ensure public directory is served at root
  publicDir: 'public',
  // Force Vite to correctly resolve paths in the public directory
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    include: ['**/*.test.tsx'],
  },
}));
