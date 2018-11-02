const pkg = require('./package.json')

const root = __dirname

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || '127.0.0.1'

const logger = require('shintech-logger')({ environment })
const server = require('./server')({ pkg, logger, environment, port, root })

const app = server.listen(port, () => {
  logger.info(`${pkg.name} - version: ${pkg.version} - listening at ${host}:${port}...`)
  logger.info(`served from ${root}...`)
})

app.on('close', () => {
  logger.warn('shutting down server...')
  logger.info('goodbye...')
})

process.on('SIGINT', () => {
  app.close()
})
