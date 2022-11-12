module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'lcov'
  ],
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' }
}
