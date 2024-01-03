const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'filenames',
    'react-redux',
    'jsx-a11y'
  ],
  extends: [
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'madbooster-common',
    'plugin:react-redux/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended'
  ],
  env: {
    browser: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    /** From eslint-config-react-app */
    'default-case': [1, {
      commentPattern: '^no default$'
    }],
    'getter-return': 1,
    'no-restricted-globals': [2].concat(restrictedGlobals),
    'no-extra-label': 1,
    'no-label-var': 1,
    'no-loop-func': 1,
    'no-restricted-syntax': [1, 'WithStatement'],
    'no-script-url': 1,
    'no-unused-labels': 1,
    'no-useless-concat': 1,
    'require-yield': 1,
    strict: [1, 'never'],
    'import/no-amd': 2,
    'import/no-anonymous-default-export': 1,
    /***/

    'promise/no-nesting': 0,

    'filenames/match-exported': 1,
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./', '../'] }],
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

    'react/no-typos': 2,
    'react/style-prop-object': 1,
    'react/jsx-handler-names': 0,
    'react/jsx-no-useless-fragment': 1,
    'react/jsx-wrap-multilines': [1, {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: { multi: 1, single: 4 }
      }
    ],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }],
    'react/jsx-filename-extension': ['error'],

    'react/display-name': 0,
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-prop-types': 0,
    'react-redux/no-unused-prop-types': 2,
    'react-redux/prefer-separate-component-file': 0,
    'react-redux/useSelector-prefer-selectors': 0,

    // INSPECT THESE LATER:
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  }
}
