/* eslint-env node */
/* eslint-disable no-console */
// Import Micro and micro-route, fs (readFileSync), path (join) and Next.js
const match = require('micro-route/match')
const micro = require('micro')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')
const { parse } = require('url')

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
        res.setHeader('Content-type', 'text/javascript')
        return readFileSync(join(__dirname, 'static', 'serviceWorker.js'))
      }
    }

    // Our server will respond with the generated webpage.
    return handle(req, res, parse(req.url, true))
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
