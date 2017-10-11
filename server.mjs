/* eslint-env node */
/* eslint-disable no-console */
/* Looking for the 2nd server implementation in micro-dev? Go to microserver.js
NOTE: That file is unmaintained and was an experiment. */
// Import Micro and micro-route, fs (readFileSync), path (join) and Next.js
import match from 'micro-route/match'
import micro from 'micro'
import next from 'next'
import fs from 'fs'
import path from 'path'
import url from 'url'
// Get Apollo Server and GraphQL schema.
import apolloServer from 'apollo-server-micro'
import schema from './server/index.js'

// Setup event handlers for Apollo Server.
const graphqlHandler = apolloServer.microGraphql({ schema })
const graphiqlHandler = apolloServer.microGraphiql({ endpointURL: '/graphql' })

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
        return fs.readFileSync(path.join(__dirname, 'static', 'serviceWorker.js'))
      }
    }

    // Implement Apollo Server and GraphiQL on Micro.
    if (match(req, '/graphql')) return graphqlHandler(req, res)
    if (dev) if (match(req, '/graphiql')) return graphiqlHandler(req, res)

    // Our server will respond with the generated webpage.
    return handle(req, res, url.parse(req.url, true))
  })

  // Start listening on port 3000.
  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
