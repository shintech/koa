const Router = require('koa-router')
const { trees } = require('./routes')

const router = new Router()

router.get('/api/trees', trees.getTrees)

module.exports = router
