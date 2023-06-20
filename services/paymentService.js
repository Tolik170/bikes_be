const { ObjectId } = require('mongoose').Types
const Order = require('../models/orderModel')
const Bike = require('../models/bikeModel')
const { createError } = require('../utils/errorHellpers')
const { createFondyInstance } = require('../utils/payment')
const { CLIENT_URL, SERVER_URL } = require('../configs/config')
const { ORDER_NOT_FOUND, NOT_VALID } = require('../consts/errors')
const {
  paymentStatuses: { APPROVED, SUCCESS },
  orderStatuses: { PROCESSING, PAID },
  EN,
  USD
} = require('../consts/payment')

const fondy = createFondyInstance()

const paymentService = {
  getPaymentCheckout: async (orderId, amount) => {
    if (!ObjectId.isValid(orderId)) {
      throw createError(400, NOT_VALID('ID'))
    }

    const fondyData = {
      server_callback_url: `${SERVER_URL}/payment/${orderId}`,
      response_url: `${CLIENT_URL}/orders/${orderId}`,
      order_id: orderId,
      order_desc: 'Bike order',
      amount,
      currency: USD,
      lang: EN
    }

    const response = await fondy.Checkout(fondyData)

    const updateData = {
      payment: {
        id: response.payment_id,
        status: response.response_status === SUCCESS ? PROCESSING : null
      }
    }
    const order = await Order.findByIdAndUpdate(orderId, updateData, { new: true }).lean().exec()

    if (!order) {
      throw createError(404, ORDER_NOT_FOUND)
    }

    return response
  },

  updatePaymentStatus: async (orderId) => {
    const status = await fondy.Status({ order_id: orderId })

    const updateData = {
      payment: { method: 'fondy', status: status.order_status === APPROVED ? PAID : PROCESSING },
      isPaid: status.order_status === APPROVED,
      paidAt: status.order_status === APPROVED ? Date.now() : null
    }

    const order = await Order.findByIdAndUpdate(orderId, updateData, { new: true }).lean().exec()

    if (!order) {
      throw createError(404, ORDER_NOT_FOUND)
    }

    const updatePurchasedCount = { $inc: { purchasedCount: 1 } }

    order.orderItems.forEach(async (id) => {
      await Bike.findByIdAndUpdate(id, updatePurchasedCount, { new: true }).lean().exec()
    })
  }
}

module.exports = paymentService
