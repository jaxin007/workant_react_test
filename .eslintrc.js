module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prettier',
  ],
  extends: [
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForAwaitStatement',
        message: 'for-await-of loops are allowed with this exception',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-return-await': 'error',
    'no-return-assign': 'warn',
    'consistent-return': 'warn',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'error',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
  },
};
