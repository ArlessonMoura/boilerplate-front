import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  eslintConfigPrettier,

  {
    languageOptions: {
      ecmaVersion: 'latest',

      sourceType: 'module',

      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'error',

      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      eqeqeq: ['error', 'always'],

      curly: ['error', 'all'],

      'no-console': 'off',

      'no-debugger': 'warn',
    },
  },
];