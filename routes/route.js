const express = require('express')

const user = require('./userRoutes')
const bike = require('./bikeRoutes')
const payment = require('./paymentRoutes')
const order = require('./orderRoutes')
const delivery = require('./deliveryRoutes')

const router = express.Router()

router.use('/users', user)
router.use('/bikes', bike)
router.use('/orders', order)
router.use('/payment', payment)
router.use('/delivery', delivery)
module.exports = router
