// eslint.config.js
import { jsse } from "@jsse/eslint-config";

export default jsse(
  {
    ignores: [
      // all /generated/ files
      "**/*-types-test.ts",
      "**/_purgatory/**",
      "./packages/geojson/**",
      "**/generated/**/*",
    ],
  },
  {
    files: ["schemas/**/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/*.test.ts"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["**/*.dts-test.ts", "**/*.test-dts.ts", "**/*.test-d.ts"],
    rules: {
      "no-console": "off",
      "no-lone-blocks": "off",
      "unused-imports/no-unused-vars": "off",
    },
  },
);
