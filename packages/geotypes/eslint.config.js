import jsse from "@jsse/eslint-config";

export default jsse(
  {
    typescript: {
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
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "no-unused-vars": "off",
      "no-lone-blocks": "off",
    },
  },
);
