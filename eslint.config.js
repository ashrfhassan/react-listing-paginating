const nodePlugin = require('eslint-plugin-n');

module.exports = [
  nodePlugin.configs['flat/recommended-script'],
  {
    languageOptions: {
      sourceType: 'module',
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'build', 'storybook-static'],
  },
];
