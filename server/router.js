const Router = require('koa-router')
const { trees } = require('./routes')

module.exports = new Router({
  prefix: '/api'
})

  .use(async (ctx, next) => {
    await next()

    ctx.set('Content-Type', 'application/json')
  })

  .get('/trees', trees.getTrees)
