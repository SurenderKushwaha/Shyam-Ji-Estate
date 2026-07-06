import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        autoStaticPathsDiscovery: true,
        crawlLinks: true
      }
    }),
    nitro(),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
});
