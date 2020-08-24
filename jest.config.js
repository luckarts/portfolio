module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}', '<rootDir>/server/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'testing-library/jest-dom/extend-expect',
    '@testing-library/user-event',
    '@testing-library/react-hooks',
    '@testing-library/jest-dom',
    'react-testing-library/cleanup-after-each'
  ], // setupFiles before the tests are ran

  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$']
};
