const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(config);