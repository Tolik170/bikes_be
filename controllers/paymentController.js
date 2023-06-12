const paymentService = require('../services/paymentService')

const getPaymentCheckout = async (req, res) => {
  const { orderId, amount } = req.query

  const response = await paymentService.getPaymentCheckout(orderId, amount)

  return res.json(response)
}

const updatePaymentStatus = async (req, res) => {
  const { id } = req.params

  await paymentService.updatePaymentStatus(id)

  return res.status(200).end()
}

module.exports = {
  getPaymentCheckout,
  updatePaymentStatus
}
