module.exports = {
  getTrees: async (ctx, next) => {
    await next()

    ctx.status = 200
    ctx.set('Content-Type', 'application/json')
    ctx.body = {
      status: 'success',
      message: 'ok'
    }
  }
}
