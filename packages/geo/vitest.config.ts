import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: {
    target: "es2017",
  },
  test: {
    benchmark: {
      exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
      include: ["**/*.{bench,benchmark}.?(c|m)[jt]s?(x)"],
    },
    include: ["./dist/**/*.test.js", "./src/**/*.test.ts"],
    exclude: [
      "**/node_modules/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
    ],
    coverage: {
      provider: "v8",
      exclude: [
        "coverage/**",
        "dist/**",
        "**/[.]**",
        "packages/*/test?(s)/**",
        "**/*.d.ts",
        "**/virtual:*",
        "**/__x00__*",
        "**/\u0000*",
        "cypress/**",
        "test?(s)/**",
        "test?(-*).?(c|m)[jt]s?(x)",
        "**/*{.,-}{test,spec}?(-d).?(c|m)[jt]s?(x)",
        "**/__tests__/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/vitest.{workspace,projects}.[jt]s?(on)",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "src/dev/**",
      ],
    },
  },
});
