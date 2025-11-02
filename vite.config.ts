import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                               // gör att det funkar i Codespaces
    port: Number(process.env.PORT) || 5173,   // använd PORT från miljön eller fallback
    strictPort: true,
    hmr: { clientPort: 443 }                  // fix för hot reload via Codespaces-proxy
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173
  }
})

