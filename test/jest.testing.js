const path = require('path')

module.exports = {
  displayName: 'test',
  globalSetup: '<rootDir>/test/setup.js',
  globalTeardown: '<rootDir>/test/teardown.js',
  testEnvironment: '<rootDir>/test/mongo-environment.js',
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'),
  ],
  // look for ts files
  testMatch: ['**/__tests__/**/*.+(js|ts|tsx)'],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  // explicitly transform ts/tsx with babel
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/__utils'],
}
