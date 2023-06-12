const { Schema, model } = require('mongoose')

const { SPECIFY_FIELD } = require('../consts/errors')
const {
  orderStatuses: { CREATED }
} = require('../consts/payment')

const validateDelivery = {
  validator: (value) => value.trim().length > 0,
  message: 'Field cannot contain only whitespace'
}

const orderSchema = new Schema(
  {
    recipient: {
      firstName: {
        type: String,
        required: [true, SPECIFY_FIELD('first name')]
      },
      lastName: {
        type: String,
        required: [true, SPECIFY_FIELD('last name')]
      },
      email: {
        type: String,
        required: [true, SPECIFY_FIELD('email')]
      },
      phoneNumber: {
        type: String,
        required: [true, SPECIFY_FIELD('phone number')]
      }
    },
    orderItems: {
      type: [String],
      required: [true, SPECIFY_FIELD('orderItems')]
    },
    delivery: {
      city: {
        type: String,
        required: [true, SPECIFY_FIELD('city')],
        validate: validateDelivery
      },
      warehouse: {
        type: String,
        required: [true, SPECIFY_FIELD('warehouse')],
        validate: validateDelivery
      }
    },
    payment: {
      id: String,
      method: String,
      status: { type: String, default: CREATED }
    },
    totalItemsPrice: Number,
    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    paidAt: Date,
    deliveredAt: Date
  },
  { timestamps: true }
)

module.exports = model('Order', orderSchema)
