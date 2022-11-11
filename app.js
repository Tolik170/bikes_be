
const initialization = require('~/initialization/initialization')
const logger = require('~/logger/logger')

const serverSetup = async (app) => {
  initialization(app)
  return app.listen(5000, () => {
    logger.info(`Server is running on port 5000`)
  })
}

module.exports = serverSetup
