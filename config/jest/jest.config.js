const path = require('path')

module.exports = {
  setupFiles: ['<rootDir>config/jest/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: 'test\\.js$',
  rootDir: path.join('..', '..'),
  testEnvironment: 'node'
}
