import { fixupPluginRules } from '@eslint/compat'
import confusingBrowserGlobals from 'confusing-browser-globals'
import { defineConfig } from 'eslint/config'
import eslintConfigMadboosterCommon from 'eslint-config-madbooster-common'
import filenamesPlugin from 'eslint-plugin-filenames'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRedux from 'eslint-plugin-react-redux'
import globals from 'globals'
import { plugins } from 'neostandard'

export default defineConfig(
  [
    plugins.promise.configs['flat/recommended'],
    plugins.react.configs.flat['jsx-runtime'],
    eslintConfigMadboosterCommon(),
    jsxA11Y.flatConfigs.recommended,
    reactHooks.configs['recommended-latest'],
    {
      name: 'legacy from eslint-config-react-app',
      rules: {
        'default-case': [1, {
          commentPattern: '^no default$',
        }],

        'getter-return': 1,

        'no-restricted-globals': [
          2
        ].concat(confusingBrowserGlobals),

        'no-extra-label': 1,
        'no-label-var': 1,
        'no-loop-func': 1,
        'no-restricted-syntax': [1, 'WithStatement'],
        'no-script-url': 1,
        'no-unused-labels': 1,
        'no-useless-concat': 1,
        'require-yield': 1,
        strict: [1, 'never']
      }
    },
    {
      extends: [{
        ...reactRedux.configs.recommended,
        name: 'react-redux-plugin/recommended',
        plugins: { reactRedux }
      }],
      plugins: {
        filenames: fixupPluginRules(filenamesPlugin),
        'react-redux': reactRedux
      },
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import-x/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        n: {
          tryExtensions: ['.js', '.ts', '.d.ts'],

          typescriptExtensionMap: [
            ['', '.js'],
            ['.js', '.js'],
            ['.ts', '.js'],
            ['.ts', '.ts'],
            ['.cts', '.cjs'],
            ['.mts', '.mjs'],
            ['.tsx', '.jsx'],
          ],
        },
      },

      rules: {
        'import-x/no-amd': 2,
        'import-x/no-anonymous-default-export': 1,
        'promise/no-nesting': 0,
        'filenames/match-exported': [1],

        'simple-import-sort/imports': [2, {
          groups: [
            ['^\\u0000react-app-polyfill'],
            ['^react$', '^prop-types$', '^react', '^@?\\w'],
            ['^@fullcalendar/react$', '^@fullcalendar/'],
          ],
        }],

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
          prop: 'parens-new-line',
        }],

        'react/jsx-max-props-per-line': ['error', {
          maximum: {
            multi: 1,
            single: 4,
          },
        }],

        'react/jsx-no-leaked-render': ['error', {
          validStrategies: ['coerce', 'ternary'],
        }],

        'react/jsx-filename-extension': ['error'],
        'react/display-name': 0,

        'react/no-unstable-nested-components': ['error', {
          allowAsProps: true,
        }],

        'react-redux/prefer-separate-component-file': 0,
        'react-redux/useSelector-prefer-selectors': 0,

        'import-x/extensions': ['error', 'ignorePackages', {
          js: 'never',
          jsx: 'never',
          cjs: 'ignorePackages',
          ts: 'never',
          tsx: 'never',
          cts: 'never',
        }],

        'jsx-a11y/no-autofocus': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
      },
    }])
