module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'vue'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  globals: {
    'ts-jest': {
      'diagnostics': false
    }
  }
}
