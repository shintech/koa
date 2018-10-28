const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'
const root = __dirname

const logger = require('shintech-logger')({ environment })
const server = require('./server')({ logger, environment, port, root })
const pkg = require('./package.json')

server.listen(port, host, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
})
