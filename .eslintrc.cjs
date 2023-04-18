const RULES = {
  OFF: "off",
  WARNING: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.OFF,
  },
};
