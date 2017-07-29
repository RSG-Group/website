module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
      }
    ],
    // For global variable definitions.
    "no-var": "off",
    // For JSX in .js files.
    "react/jsx-filename-extension": "off",
    // No package.json cross-validation kk bai.
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    // Update jsx-a11y.
    "jsx-a11y/href-no-hash": "off"
  }
};