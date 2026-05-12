import { theme } from "./src/theme/theme";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: theme,
  outdir: "styled-system",
  jsxFramework: "react",
});
