module.exports = {
  "preset": "ts-jest",
  "setupFilesAfterEnv": [
    "<rootDir>/tools/jest/setup.ts"
  ],
  "globals": {
    "__DEV__": true
  },
  "collectCoverageFrom": [
    "src/actions/**/*.ts",
    "src/reducers/**/*.ts",
    "src/app/**/*.tsx",
    "src/pages/**/*.tsx",
    "src/components/**/*.tsx",
    "!src/actions/index.ts",
    "!src/reducers/index.ts",
    "!src/components/index.ts",
    "!src/pages/index.ts",
    "!src/pages/Home/index.js",
    "!src/pages/UserInfo/index.js"
  ],
  "moduleNameMapper": {
    ".*\\.(css|scss|sass)$": "<rootDir>/tools/jest/styleMock.ts",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tools/jest/assetMock.ts"
  }
};
