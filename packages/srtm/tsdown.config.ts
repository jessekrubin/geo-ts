import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/srtm.ts"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  fixedExtension: false,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
