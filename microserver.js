/* eslint-env node */
/* Experiment to build a non-programmatic version of server.js to leverage micro-dev.
NOTE: This has nothing to do with the actual server code. The actual server is at server.js.
It is an unmaintained, experimental version of server.js with micro-dev.
So, we begin with imports. */
// Import Micro and micro-route, fs (readFileSync), path (join) and Next.js
const match = require('micro-route/match')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')
const { parse } = require('url')
// Get Apollo Server and GraphQL schema.
const { microGraphiql, microGraphql } = require('apollo-server-micro')
const schema = require('./server')

// Setup event handlers for Apollo Server.
const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

// We can't check for production with a flag, so we will depend on the environment variable.
const dev = process.env.NODE_ENV !== 'production'

// Now we create our Next.js app and its event handler.
const app = next({dev})
const handle = app.getRequestHandler()

// Track if Next.js has been prepared.
let prepared

// Once our application is bootstrapped, we need to export our microservice function.
module.exports = async (req, res) => {
  // If Next.js hasn't been prepared.
  if (!prepared) {
    // Wait for Next.js to prepare.
    await app.prepare()
    // Tell our external variable that Next.js has been prepared.
    prepared = true
  }
  // We need a service worker in a production environment.
  if (!dev) {
    // If a request for a service worker has been made.
    if (match(req, '/sw.js')) {
      // Tell the browser we're sending JavaScript.
      res.setHeader('Content-type', 'text/javascript')
      // Then send our service worker.
      return readFileSync(join(__dirname, 'static', 'serviceWorker.js'))
    }
  }

  // Implement Apollo Server and GraphiQL on Micro.
  if (match(req, '/graphql')) return graphqlHandler(req, res)
  if (match(req, '/graphiql')) return graphiqlHandler(req, res)

  // Else, if the client is requesting something else, ask Next.js to handle the request.
  return handle(req, res, parse(req.url, true))
}
