import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Automatically uses repo name as base path on GitHub Pages
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
  : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
