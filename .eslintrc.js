module.exports = {
  parser: 'pluggable-babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    plugins: ['typescript'],
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'jest/no-large-snapshots': 'error',
  },
}
