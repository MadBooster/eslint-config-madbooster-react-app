module.exports = {
  extends: [
    "plugin:promise/recommended",
    "standard",
    "standard-jsx",
    "standard-react",
    "react-app",
    'react-app/jest'
  ],
  rules: {
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true,
        "overrides": {
          "if": {
            "after": false
          },
          "for": {
            "after": false
          },
          "while": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "catch": {
            "after": false
          }
        }
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^__",
        "argsIgnorePattern": "^__",
        "caughtErrorsIgnorePattern": "^__",
        // from extended configs
        "args": "none",
        "ignoreRestSiblings": true
      }
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "promise/no-nesting": 0
  }
}