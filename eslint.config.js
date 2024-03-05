// eslint.config.js
import jsse from "@jsse/eslint-config";

export default [
  ...jsse({
    ignores: [
      // all /generated/ files
      "**/*-types-test.ts",
      "**/_purgatory/**",
      "packages/geozod/**",
      "./packages/geojson/**",
      "./packages/geozod/**",
      "**/generated/**/*",
      "packages/geotypia/src/typia-input/**",
      "./packages/geojson/**",
    ],
  }),
  {
    files: ["schemas/**/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
];
