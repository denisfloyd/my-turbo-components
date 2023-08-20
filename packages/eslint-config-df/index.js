/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'simple-import-sort',
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jest-dom',
    'jest',
    'testing-library',
  ],
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'import/no-import-module-exports': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages and side effect imports.
          ['^@?\\w', '^\\u0000'],
          // Components and providers.
          ['^@/components', '^@/providers'],
          // Hooks
          ['^@/hooks'],
          // Utils, helpers, and lib
          ['^@/utils', '^@/helpers', '^@/lib'],
          // Other absolute imports.
          ['^@/'],
          // Relative imports.
          ['^\\.'],
          // Import type and types.
          ['^.*\\u0000$', '^@/types'],
          // Styles.
          ['^.+\\.s?css$'],
          // Anything not matched in another group.
          ['^'],
        ],
      },
    ],
  },
  ignorePatterns: [
    '.next',
    '.turbo',
    'dist',
    'node_modules',
    '**/*.js',
    '**/*.mjs',
    '**/*.jsx',
    '**/*.mdx',
  ],
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mdx)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
      },
    },
    {
      files: ['*.@(spec|test).@(ts|tsx)'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
    },
    typescript: {},
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
  },
};
