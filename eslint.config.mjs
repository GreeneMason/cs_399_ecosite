import { defineConfig, globalIgnores } from "eslint/config";
// nextVitals provides performance-focused linting rules based on Core Web Vitals.
import nextVitals from "eslint-config-next/core-web-vitals";
// nextTs offers TypeScript-specific linting rules for Next.js projects.
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
