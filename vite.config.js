import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages subpath on build; root path for local dev
  base: command === "build" ? "/tejeshwar-Portfolio/" : "/",
}));
