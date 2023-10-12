const config = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'plugin:json/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'import/no-unresolved': 'error',
    'import/order': 'error',
    indent: [
      'error',
      2,
    ],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
  },
}

module.exports = config
