const express = require('express')

const deliveryController = require('../controllers/deliveryController')
const asyncWrapper = require('../middlewares/asyncWrapper')

const router = express.Router()

router.get('/warehouses', asyncWrapper(deliveryController.getNovaPoshtaWarehouses))
router.get('/cities', asyncWrapper(deliveryController.getNovaPoshtaCities))

module.exports = router
