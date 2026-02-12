import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  fixedExtension: false,
  inlineOnly: false, // TODO: rm if tsdown fixes this...
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
