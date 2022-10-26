module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'import/first': 'off',
    camelcase: 'off',
  },
};
