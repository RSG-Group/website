module.exports = {
  "presets": ['@babel/preset-flow', "@babel/preset-react", ["@babel/preset-env", {
    "targets": {
      "node": "current",
      "browsers": [
        "last 2 versions",
        ">= 1%",
        "Firefox ESR"
      ]
    },
    "modules": false,
    "exclude": ['transform-classes']
  }], ["@babel/preset-stage-0", { "decoratorsLegacy": true }]],
  "plugins": ["@babel/plugin-transform-runtime"]
}
