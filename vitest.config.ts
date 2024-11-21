import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: false,
    // reporters: ["verbose"],
    exclude: [
      "**/node_modules/**",
      "**/_purgatory/**",
      "**/dist/**",
      "**/*.cjs",
      "**/geotypia/**",
    ],
  },
});
