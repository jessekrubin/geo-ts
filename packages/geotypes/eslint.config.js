import { fileURLToPath } from "node:url";
import jsse from "@jsse/eslint-config";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse(
  {
    sortImports: true,
    typescript: {
      strict: true,
      parserOptions: { tsconfigRootDir },
      tsconfigPath: [
        "tsconfig.json",
        "tsconfig.tsd.json",
        "tsconfig.eslint.json",
      ],
    },
  },
  {
    files: ["src/types-tests/*.ts", "src/types-tests/*.tsx"],
    rules: {
      "unused-imports/no-unused-vars": "off",
      "no-unused-vars": "off",
      "no-lone-blocks": "off",
      "no-console": "off",
    },
  },
);
