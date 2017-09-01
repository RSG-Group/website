/* eslint-env node */
/* eslint-disable no-console */
// Import Express, fs (readFileSync), path (join) and Next.js
let compression
const express = require('express')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')
if (process.env.NODE_ENV !== 'production') compression = require('compression')

// If production is explicitly specified via flag..
if (process.argv[2] === '--production') {
  process.env.NODE_ENV = 'production'
}

// Check for development environment.
const dev = process.env.NODE_ENV !== 'production'

// Get compression if in production.
if (!dev) compression = require('compression')

// Launch webpage generator (Next.js) and setup its request handler.
const app = next({dev})
const handle = app.getRequestHandler()

// Once preparation of webpage generator has taken place..
app.prepare().then(() => {
  // Create our server.
  const server = express()

  // We need a service worker.
  server.get('/sw.js', (req, res) => {
    res.set('Content-type', 'text/javascript')
    res.send(readFileSync(join(__dirname, 'static', 'serviceWorker.js')))
  })

  // Use Gzip compression in production.
  if (!dev) server.use(compression({ level: 6 }))

  // Our server will respond with the generated webpage.
  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:3000')
  })
})
