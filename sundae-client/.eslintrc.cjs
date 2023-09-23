module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "testing-library", "jest-dom"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "testing-library/await-async-events": "error",
    "testing-library/await-async-queries": "error",
    "testing-library/no-await-sync-events": "error",
    "testing-library/no-await-sync-queries": "error",
    "testing-library/prefer-user-event": "warn",
    "testing-library/prefer-screen-queries": "warn",
  },
};
