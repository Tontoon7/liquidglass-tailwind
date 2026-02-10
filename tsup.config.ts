import { defineConfig } from "tsup";
import { copyFileSync } from "fs";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    theme: "src/theme.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  onSuccess: async () => {
    copyFileSync("src/filters.css", "dist/filters.css");
  },
});
