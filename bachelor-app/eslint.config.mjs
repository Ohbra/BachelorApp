// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // This is the configuration object for your project's ESLint rules and ignores
    ignores: [
      // Corrected path to ignore all files within Prisma's generated output directory
      "app/src/app/backend/generated/prisma/**/*",
      // Keep your existing ignore patterns
      "**/*.generated.*",
      ".next/**/*",
      "node_modules/**/*",
    ],
    // If you have any specific rules to apply globally (e.g., warnings for 'any' in your own code),
    // you would add them here. For instance, to change 'no-explicit-any' to a warning:
    // rules: {
    //   "@typescript-eslint/no-explicit-any": "warn",
    //   "@typescript-eslint/no-unused-vars": "warn",
    //   "@typescript-eslint/no-empty-object-type": ["error", { "allowObjectTypes": false }] // Default, but explicit
    // }
  },
];

export default eslintConfig;