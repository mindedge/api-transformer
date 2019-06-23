module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
    "transform": {
      "^.+\\.jsx?$": "babel-jest", 
      "^.+\\.tsx?$": "ts-jest"
      
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
    "collectCoverage":true,
    "coverageDirectory": "./coverage/",
    "coverageReporters":["text", "lcov", "clover"]
};