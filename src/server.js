const express = require('express')
const next = require('next')

const server = (dev=true) => {
  const port = (dev?3000:80)
  const dir = './src/'
  const app = next({dev, dir})
  const handle = app.getRequestHandler()
  app.prepare().then(() => {
    const server = express()

    server.get('/creature/:hash', (req, res) => {
      return app.render(req, res, '/creature', {hash: req.params.hash})
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
}

module.exports = server
