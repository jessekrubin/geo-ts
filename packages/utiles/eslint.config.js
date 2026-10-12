import { fileURLToPath } from "node:url";
// eslint.config.js
import jsse from "@jsse/eslint-config";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse({
  typescript: {
    strict: true,
    parserOptions: { tsconfigRootDir },
  },
  pnpm: true,
  sortImports: true,
}, {
  files: ["test-data/cover/world/**/*.geojson"],
  rules: {
    "unicorn/filename-case": "off"
  },
});
