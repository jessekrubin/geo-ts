import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/srtm.ts"],
  splitting: false,
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  target: "esnext",
  tsconfig: "./tsconfig.json",
});
