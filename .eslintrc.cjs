/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ["!**/.server", "!**/.client", ".eslint*.*", "/tests/**"],

  // Base config
  extends: [
    'plugin:@next/next/recommended',
    "@markushevpro/eslint-config"
  ],

  rules: {
    "promise/always-return": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    
    "no-relative-import-paths/no-relative-import-paths": [
        "error",
        { "allowSameFolder": true, "rootDir": "app", "prefix": "~" }
    ],
  },

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/resolver": {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^(~|@)/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    //Allow defaults
    {
        files: [ "src/pages/**/*.*", "src/@/entrypoints/**/index.tsx" ],
        rules: {
            "import/no-default-export": [0]
        }
    },

    // Node
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
  ],
};
