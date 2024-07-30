/**
 * @see https://dev.to/brayanarrieta/how-to-integrate-eslint-with-your-react-typescript-project-2021-182n
 */
module.exports = {
  plugins: ['react', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'prettier', // this should be the last
  ],
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2021, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    es2021: true,
    browser: true, // Enables browser globals like window and document
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true,
  },
  globals: {},
  rules: {
    curly: 'warn',
    'no-console': ['error', {allow: ['warn', 'error', 'info']}],
    'spaced-comment': ['warn', 'always'],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'jest/no-mocks-import': 'off',
  },
};
