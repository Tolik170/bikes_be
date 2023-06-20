const express = require('express')

const paymentController = require('../controllers/paymentController')
const asyncWrapper = require('../middlewares/asyncWrapper')

const router = express.Router()

router.get('/checkout', asyncWrapper(paymentController.getPaymentCheckout))
router.post('/:id', asyncWrapper(paymentController.updatePaymentStatus))


module.exports = router
