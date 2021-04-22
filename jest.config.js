const path = require('path')
const config = require('kcd-scripts/jest')

module.exports = {
  ...config,
  moduleDirectories: ['node_modules', path.join(__dirname, 'tests')],
  coverageThreshold: null,
  globalSetup: '<rootDir>/tests/setup.ts',
  globalTeardown: '<rootDir>/tests/teardown.ts',
}
