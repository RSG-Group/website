// Our Apollo server currently lies here.
// In the future, the purpose of this file may shift beyond Apollo Server, but not now.
// Get our tools to make a schema and import types.
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')

// Get our database.
const CardsDB = require('./database')

// Get our schema.
const typeDefs = readFileSync(join(__dirname, 'schema', 'schema.graphql'))

// Set up resolvers.
const resolvers = {
  Query: {
    allCards: () => CardsDB
  }
}

// Create and export a schema.
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
