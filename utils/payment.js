const CloudIpsp = require('cloudipsp-node-js-sdk')
const { FONDY_MERCHANT_ID, FONDY_SECRET_KEY } = require('../configs/config')

const createFondyInstance = () =>
  new CloudIpsp({
    merchantId: FONDY_MERCHANT_ID,
    secretKey: FONDY_SECRET_KEY
  })

  module.exports = {
    createFondyInstance
  }