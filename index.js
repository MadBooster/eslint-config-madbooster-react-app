module.exports = {
  plugins: [
    'filenames',
    'react-redux'
  ],
  extends: [
    'plugin:promise/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'react-app',
    'react-app/jest',
    'madbooster-common',
    'plugin:react-redux/recommended',
    'plugin:react/jsx-runtime'
  ],
  rules: {
    'promise/no-nesting': 0,

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

    'react/jsx-handler-names': 0,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
    'react/jsx-wrap-multilines': [1, {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/no-unused-prop-types': 0,

    'react-redux/no-unused-prop-types': 2,
    'react-redux/prefer-separate-component-file': 0,
    'react-redux/useSelector-prefer-selectors': 0,
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: { multi: 1, single: 4 }
      }
    ]
  }
}
