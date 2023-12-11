module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  //   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};
