import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    json: "src/exports/json.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  fixedExtension: false,
  clean: true,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
