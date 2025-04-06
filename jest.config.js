module.exports = {
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@animations/(.*)$": "<rootDir>/src/animations/$1",
    "^@ui/(.*)$": "<rootDir>/src/ui/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@lottiefiles/(.*)$": "<rootDir>/assets/lottie_files/$1",
  },
};
