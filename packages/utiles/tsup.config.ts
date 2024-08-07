import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tilebelt.ts"],
  splitting: false,
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  target: "es2022",
  tsconfig: "./tsconfig.json",
});
