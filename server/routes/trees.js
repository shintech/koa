const { Readable } = require('stream')

module.exports = {
  getTrees: async (ctx, next) => {
    const s = new Readable()

    s.push(JSON.stringify({
      message: 'ok'
    }))

    s.push(null)

    await next()

    ctx.status = 200
    ctx.body = s
  }
}
