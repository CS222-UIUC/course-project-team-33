module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: 'off',
    'react/jsx-indent': 'off',
    'jsx-quotes': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
