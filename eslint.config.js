// eslint.config.js
import jsse from "@jsse/eslint-config";

export default jsse({
  ignores: [
    // all /generated/ files
    "**/generated/**/*",
    "./packages/geotypia/src/typia-input/**",
    "./packages/geojson/**",
  ],
});
