const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'
const hostname = process.env['HOSTNAME'] || 'default'

const logger = require('./server/logger')({ environment })
const server = require('./server')({ logger, environment, hostname, port })
const pkg = require('./package.json')

server.listen(port, host, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
})
