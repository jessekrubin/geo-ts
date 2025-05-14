import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/tilebelt.ts",
    "src/tile-type.ts",
    "src/tile-cover.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  target: "es2022",
  tsconfig: "./tsconfig.json",
});
