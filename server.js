/* eslint-env node */
/* eslint-disable no-console */
// Import Express and Next.js
const express = require('express')
const next = require('next')

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

  // Our server will respond with the generated webpage.
  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:3000')
  })
})
