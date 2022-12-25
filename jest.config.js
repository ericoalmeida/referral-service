module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.type.ts',
    '!<rootDir>/src/**/*.params.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/domain/**',
    '!<rootDir>/src/data/protocols/**',
    '!<rootDir>/src/presentation/protocols/**'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'lcov'
  ],
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests'
  ],
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' },
  moduleNameMapper: {
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@main/(.*)': '<rootDir>/src/main/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  }
}
