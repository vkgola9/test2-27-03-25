import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/dist/' : '/',  // Use '/dist/' for production only
    server: {
      host: "::",
      port: "9080",
      historyApiFallback: true,  // Handles client-side routing for React SPA in Dev mode
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
        {
          find: "lib",
          replacement: resolve(__dirname, "lib"),
        },
      ],
    },
    build: {
      outDir: 'dist',  // The output folder for static files
      emptyOutDir: true,  // Clean dist folder before building
    },
  };
});
