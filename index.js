const createServer = require('./server')
const createLogger = require('shintech-logger')
const api = require('./server/router')
const pkg = require('./package.json')

const PORT = parseInt(process.env['PORT']) || 8000
const NODE_ENV = process.env['NODE_ENV'] || 'development'

const logger = createLogger()

logger.info(`initializing -> ${pkg.name} - version: ${pkg.version}...`)
logger.info(`config: ${JSON.stringify({ PORT, NODE_ENV })}...`)

const server = createServer({ api, logger })

const listening = (app, port, host) => logger.info(`${app} -> listening at ${host}:${port}...`)
const handleError = (err) => logger.error(err.message)

server.listen(PORT)
  .on('listening', () => listening('server', PORT, '0.0.0.0'))
  .on('error', err => handleError(err))
