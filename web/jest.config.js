module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  coverageReporters: ['json-summary', 'text'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/tests/setupTests.js'],
};
