import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  cacheDir: "./node_modules/.vite",
  optimizeDeps: {
    // We removed 'disabled' and 'noDiscovery' so Vite can do its job.
    // We are explicitly forcing Vite to process lucide-react just to be safe.
    include: ["lucide-react"]
  }
});