import jsse from "@jsse/eslint-config";
import { fileURLToPath } from "node:url";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse(
  {
    typescript: {
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
