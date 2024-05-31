module.exports = {
    env: {
      'jest/globals': true,
    },
    root: true,
    extends: [],
    plugins: ['jest', "react", "react-hooks"],
    rules: {
      // semi: ['error', 'never'],
      // 'object-curly-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      // 'react/require-default-props': ['error'],
      // 'react/default-props-match-prop-types': ['error'],
      'react/sort-prop-types': ['error'],
      'react/react-hooks/exhaustive-deps': [0],
    },
    settings: {
      'import/resolver': {
        'babel-module': {},
      },
    },
    parserOptions: {
      "sourceType": "module",
      "ecmaVersion": 2020
    },
  }
  