const express = require('express')

const orderController = require('../controllers/orderController')
const asyncWrapper = require('../middlewares/asyncWrapper')

const router = express.Router()

router.post('/', asyncWrapper(orderController.createOrder))

module.exports = router
