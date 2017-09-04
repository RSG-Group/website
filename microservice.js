/* eslint-env node */
/* Trying to build a non-programmatic version of server.js to leverage micro-dev.
So, we begin with imports. */
// Import Micro and micro-route, fs (readFileSync), path (join) and Next.js
const match = require('micro-route/match')
const next = require('next')
const { readFileSync } = require('fs')
const { join } = require('path')
const { parse } = require('url')

// We can't check for production with a flag, so we will depend on the environment variable.
const dev = process.env.NODE_ENV !== 'production'

// Now we create our Next.js app and its event handler.
const app = next({dev})
const handle = app.getRequestHandler()

// Once our application is bootstrapped, we need to export our microservice function.
module.exports = async (req, res) => {
  // Wait for Next.js to prepare our site.
  await app.prepare()
  // We need a service worker in a production environment.
  if (!dev) {
    if (match(req, '/sw.js')) {
      res.setHeader('Content-type', 'text/javascript')
      return readFileSync(join(__dirname, 'static', 'serviceWorker.js'))
    }
  }

  // Else, if the client is requesting something else, ask Next.js to handle the request.
  return handle(req, res, parse(req.url, true))
}
