const Order = require('../models/orderModel')

const createOrder = async (req, res) => {
  const newOrder = await Order.create(req.body)

  res.status(201).json(newOrder)
}

module.exports = {
    createOrder
}
