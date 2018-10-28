const path = require('path')
const pkg = require('./package.json')

const environment = 'test'
const port = 8000
const root = __dirname
const host = 'localhost'

const logger = require('shintech-logger')({ environment })

global._server = require(path.join(__dirname, 'server'))({ pkg, logger, environment, port, host, root })
