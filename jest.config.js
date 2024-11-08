module.exports = {
  preset: 'react-native',
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        babelConfig: true,
      },
    ],
  },
  "collectCoverageFrom": ["**/*.(ts|tsx)"],
  "coverageDirectory": "./.tests/coverage",
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-whatsapp-login-button)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
  }
}; 
