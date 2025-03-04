import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: globals.browser,
    ecmaVersion: "latest", // Ensures support for modern JS
    sourceType: "module", // Allows use of ES modules (import/export)
  },
  extends: [js.configs.recommended], // Extends recommended ESLint rules
  rules: {
    "no-console": "warn", // Warns on console.log usage
    "no-unused-vars": "warn", // Warns on unused variables
    "eqeqeq": "error", // Enforces strict equality (===)
  },
};
