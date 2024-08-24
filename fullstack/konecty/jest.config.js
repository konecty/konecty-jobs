const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
 // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // setupFilesAfterEnv: ["@testing-library/jest-dom"]
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",


  // The test environment that will be used for testing
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);