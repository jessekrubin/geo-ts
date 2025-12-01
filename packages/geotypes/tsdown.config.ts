import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  format: ["cjs", "esm"],
  dts: true,
  fixedExtension: false,
  outDir: "dist",
  clean: true,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
