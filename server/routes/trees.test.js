/* eslint-env jest */

const request = require('supertest')

describe('SERVER -> GET /api/trees..', () => {
  let ctx, app

  beforeAll(async () => {
    app = _server.listen()

    ctx = await request(app).get('/api/trees')
  })

  afterAll(() => {
    app.close()
  })

  it('expect ctx to have property status...', () => {
    expect(ctx).toHaveProperty('status')
  })

  it('expect ctx to have status 200......', () => {
    expect(ctx.status).toEqual(200)
  })

  it('expect ctx -> body to have property message...', () => {
    expect(ctx.body).toHaveProperty('message')
  })

  it('expect ctx -> body -> message to be "ok"...', () => {
    expect(ctx.body.message).toBe('ok')
  })
})
