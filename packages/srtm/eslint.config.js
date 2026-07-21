import { fileURLToPath } from "node:url";
import jsse from "@jsse/eslint-config";

const tsconfigRootDir = fileURLToPath(new URL(".", import.meta.url));

export default jsse({
  typescript: { strict: true, parserOptions: { tsconfigRootDir } },
  sortImports: true,
});
