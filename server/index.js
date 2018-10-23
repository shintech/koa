const Koa = require('koa')
const router = require('./router')
const compress = require('koa-compress')
const views = require('koa-views')
const path = require('path')

module.exports = ({ logger, port, hostname, environment }) => {
  const app = new Koa()

  app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

  app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    logger.info(`${ctx.method} ${ctx.status} ${ctx.url} - ${rt}`)
  })

  app.use(async (ctx, next) => {
    const start = Date.now()
    await next()

    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  })

  app.use(compress({
    threshold: 1024
  }))

  app.use(router.routes())
  app.use(router.allowedMethods())

  router.get('/', async ctx => {
    await ctx.render('index', {
      hostname: hostname
    })
  })

  app.use((ctx, next) => {
    ctx.body = {
      status: 'error'
    }

    ctx.status = 404
  })

  return app
}
