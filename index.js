module.exports = {
  extends: [
    "standard",
    "standard-react",
    "react-app"
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
    ]
  }
}