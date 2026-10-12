// eslint.config.js
import jsse from "@jsse/eslint-config";
import { fileURLToPath } from "node:url";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse(
  { pnpm: true, typescript: { parserOptions: { tsconfigRootDir } } },
  { files: ["./src/types-tests/**/*.ts"], rules: { "no-console": "off" } },
);
