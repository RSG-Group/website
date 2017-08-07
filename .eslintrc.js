module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parser: "babel-eslint",
  plugins: ["react"],
  extends: ["xo-react/space", "xo"],
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "react/forbid-component-props": "off"
  }
}