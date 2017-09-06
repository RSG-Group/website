/* eslint-env node */
/* eslint-disable no-console */
/* Looking for the 2nd server implementation in micro-dev? Go to microserver.js
NOTE: That file is unmaintained and was an experiment. */
// Import Micro and micro-route, fs (readFileSync), path (join) and Next.js
const match = require('micro-route/match')
const micro = require('micro')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')
const { parse } = require('url')
// Get Apollo Server and GraphQL schema.
const { microGraphiql, microGraphql } = require('apollo-server-micro')
const schema = require('./server')

// Setup event handlers.
const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

// If production is explicitly specified via flag..
if (process.argv[2] === '--production') {
  process.env.NODE_ENV = 'production'
}

// Check for development environment.
const dev = process.env.NODE_ENV !== 'production'

// Launch webpage generator (Next.js) and setup its request handler.
const app = next({dev})
const handle = app.getRequestHandler()

// Once preparation of webpage generator has taken place..
app.prepare().then(() => {
  // Create our server.
  const server = micro(async (req, res) => {
    // We need a service worker in production.
    if (!dev) {
      if (match(req, '/sw.js')) {
        // Tell the browser it's JavaScript.
        res.setHeader('Content-type', 'text/javascript')
        // Then resolve and send it.
        return readFileSync(join(__dirname, 'static', 'serviceWorker.js'))
      }
    }

    // Implement Apollo Server and GraphiQL on Micro.
    if (match(req, '/graphql')) return graphqlHandler(req, res)
    if (match(req, '/graphiql')) return graphiqlHandler(req, res)

    // Our server will respond with the generated webpage.
    return handle(req, res, parse(req.url, true))
  })

  // Start listening on port 3000.
  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
