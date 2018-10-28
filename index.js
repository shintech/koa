const pkg = require('./package.json')

const root = __dirname
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || '127.0.0.1'

const logger = require('shintech-logger')({ environment })

if (!module.parent) require('./server')({ pkg, logger, environment, port, host, root })
