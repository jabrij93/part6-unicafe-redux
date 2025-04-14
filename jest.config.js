// jest.config.js
export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    extensionsToTreatAsEsm: ['.js'],
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx'],
  };  