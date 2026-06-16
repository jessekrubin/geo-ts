// eslint.config.js
import { jsse } from "@jsse/eslint-config";
import { fileURLToPath } from "node:url";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse(
  {
    ignores: [
      // all /generated/ files
      "**/*-types-test.ts",
      "**/_purgatory/**",
      "./packages/geojson/**",
      "**/generated/**/*",
      "**/packages/_dev/**",
    ],
    typescript: { parserOptions: { tsconfigRootDir } },
  },
  { files: ["schemas/**/*"], rules: { "unicorn/filename-case": "off" } },
  { files: ["**/*.test.ts"], rules: { "no-console": "off" } },
  {
    files: ["**/*.dts-test.ts", "**/*.test-dts.ts", "**/*.test-d.ts"],
    rules: {
      "unused-imports/no-unused-vars": "off",
      "no-lone-blocks": "off",
      "no-console": "off",
    },
  },
);
