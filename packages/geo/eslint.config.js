// eslint.config.js
import jsse from "@jsse/eslint-config";

export default jsse(
  {},
  {
    files: ["./src/types-tests/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },
);
