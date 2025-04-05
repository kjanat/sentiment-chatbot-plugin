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
      // your custom rules here
    },
  },
];
