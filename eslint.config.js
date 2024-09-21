// eslint.config.js
import jsse from "@jsse/eslint-config";

export default jsse(
  {
    ignores: [
      // all /generated/ files
      "**/*-types-test.ts",
      "**/_purgatory/**",
      "packages/geozod/**",
      "./packages/geojson/**",
      "./packages/geozod/**",
      "**/generated/**/*",
      "packages/geotypia/src/typia-src/**",
      "./packages/geojson/**",
    ],
  },
  {
    files: ["schemas/**/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/*.dts-test.ts", "**/*.test-dts.ts", "**/*.test-d.ts"],
    rules: {
      "unused-imports/no-unused-vars": "off",
      "no-lone-blocks": "off",
    },
  },
);
