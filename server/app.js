module.exports = function app ({ server }) {
  const app = server.listen()

  app.on('close', () => {
    // this function is here to close database connections and cleanup after tests
  })

  return app
}
