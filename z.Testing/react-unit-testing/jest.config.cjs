module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "\\.css$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
