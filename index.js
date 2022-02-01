module.exports = {
  plugins: [
    'lodash',
    'lodash-fp',
    'filenames',
    'you-dont-need-lodash-underscore',
    'simple-import-sort',
    'react-redux'
  ],
  extends: [
    'plugin:promise/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'react-app',
    'react-app/jest',
    'plugin:lodash/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible-warn',
    'plugin:react-redux/recommended'
  ],
  rules: {
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          if: {
            after: false
          },
          for: {
            after: false
          },
          while: {
            after: false
          },
          switch: {
            after: false
          },
          catch: {
            after: false
          }
        }
      }
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^__',
        argsIgnorePattern: '^__',
        caughtErrorsIgnorePattern: '^__',
        // from extended configs
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'promise/no-nesting': 0,

    'lodash/prefer-lodash-method': 0,
    'lodash/import-scope': 0,
    'lodash-fp/use-fp': 0,
    'lodash-fp/prefer-get': 0,
    'lodash-fp/no-extraneous-args': 0,
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'filenames/match-exported': 1,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000react-app-polyfill'],
          ['^react$', '^prop-types$', '^react', '^@?\\w'],
          ['^@fullcalendar/react$', '^@fullcalendar/']
        ]
      }
    ],
    'sort-imports': 0,
    'import/order': 0,
    'arrow-parens': [1, 'as-needed'],
    'react/jsx-wrap-multilines': [1, {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-handler-names': 0,
    'react/no-unused-prop-types': 0,
    'react-redux/no-unused-prop-types': 2,
    'react-redux/prefer-separate-component-file': 0,
    'react-redux/useSelector-prefer-selectors': 0,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
    'you-dont-need-lodash-underscore/is-string': 0,
    'you-dont-need-lodash-underscore/is-function': 0
  }
}
