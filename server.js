/* eslint-env node */
/* eslint-disable no-console */
// Import Express, fs (readFileSync), path (join) and Next.js
const express = require('express')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')

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
  const server = express()

  // We need a service worker.
  if (!dev) {
    server.get('/sw.js', (req, res) => {
      res.set('Content-type', 'text/javascript')
      res.send(readFileSync(join(__dirname, 'static', 'serviceWorker.js')))
    })
  }

  // Our server will respond with the generated webpage.
  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:3000')
  })
})
