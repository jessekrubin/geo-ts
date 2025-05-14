import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    json: "src/exports/json.ts",
  },
  splitting: false,
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
