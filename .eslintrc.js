module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parser: "babel-eslint",
  plugins: ["react", "graphql"],
  extends: ["standard", "standard-react"],
  rules: {
    'graphql/template-strings': ['error', {
      env: 'apollo',
      schemaString: require('fs').readFileSync(
        require('path').resolve(__dirname, 'server/schema.graphql'),
        { encoding: 'utf8' }
      )
    }]
  }
}
