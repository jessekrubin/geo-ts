import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/testing.ts",
    "src/tile-cover.ts",
    "src/tile-type.ts",
    "src/tilebelt.ts",
  ],
  fixedExtension: false,
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  target: "es2022",
  tsconfig: "./tsconfig.json",
});
