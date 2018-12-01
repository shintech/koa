const createServer = require('../../server')
const createLogger = require('shintech-logger')
const api = require('../../server/router')

global.process.env = {
  NODE_ENV: 'test',
  BASE_URL: 'http://localhost:8000',
  PORT: 8000,
  HOST: 'localhost'
}

const logger = createLogger()

const server = createServer({ api, logger })

global._server = server

global._treesMock = {
  value: 0,
  message: 'ok'
}
