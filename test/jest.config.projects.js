const path = require('path')

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**'],
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  projects: [
    './test/jest.lint.js',
    './test/jest.tsc.js',
    './test/jest.testing.js',
  ],
}
