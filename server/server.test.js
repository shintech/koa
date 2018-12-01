/* eslint-env jest */

const request = require('supertest')

describe('SERVER -> GET /api/404...', () => {
  let ctx, app

  beforeAll(async () => {
    app = _server.listen()

    ctx = await request(app).get('/api/404')
  })

  afterAll(() => {
    app.close()
  })

  it('expect ctx to have property status...', () => {
    expect(ctx).toHaveProperty('status')
  })

  it('expect ctx to have status 404......', () => {
    expect(ctx.status).toEqual(404)
  })

  it('expect body to have property status...', () => {
    expect(ctx.body).toHaveProperty('status')
  })

  it('expect body -> message to be "404 - not found"...', () => {
    expect(ctx.body.status).toBe('error')
  })

  it('expect body to have property message...', () => {
    expect(ctx.body).toHaveProperty('message')
  })

  it('expect body -> message to be "404 - not found"...', () => {
    expect(ctx.body.message).toBe('404 - not found')
  })
})
