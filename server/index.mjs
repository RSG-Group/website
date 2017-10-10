// Our Apollo server currently lies here.
// In the future, the purpose of this file may shift beyond Apollo Server, but not now.
// Get our tools to make a schema and import types.
import { makeExecutableSchema } from 'graphql-tools'
import { readFileSync } from 'fs'
import { join } from 'path'

// Get our database.
const CardsDB = require('./database')

// Get our schema.
const typeDefs = readFileSync(join(process.cwd(), 'server', 'schema.graphql'), { encoding: 'utf8' })

// Set up resolvers.
const resolvers = {
  Query: {
    allCards: () => CardsDB
  }
}

// Create and export a schema.
module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
