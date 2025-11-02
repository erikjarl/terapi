import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "/terapi/",                   // ⬅️ viktig
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
    hmr: { clientPort: 443 },
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
  },
});
