import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 5001,
  },
  plugins: [
    { enforce: "pre", ...mdx() },
    react(),
    svgr(),
  ],
});
