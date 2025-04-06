module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        // Node globals
        require: "readonly",
        module: "writable",
        process: "readonly",
        global: "readonly",
      },
    },
    rules: {
      "no-console": "off", // Allow console statements
      "no-unused-vars": "warn", // Warn for unused variables
      "prefer-const": "error", // Enforce using const for variables that are never reassigned
      eqeqeq: ["error", "always"], // Enforce strict equality checks
      curly: ["error", "all"], // Enforce consistent brace style for all control statements
    },
  },
];
