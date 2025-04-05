module.exports = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/test/**/*.test.js"],
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@animations/(.*)$": "<rootDir>/src/animations/$1",
    "^@ui/(.*)$": "<rootDir>/src/ui/$1",
  },
};
