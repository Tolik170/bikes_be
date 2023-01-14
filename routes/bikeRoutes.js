const express = require('express')
const bikeController = require('../controllers/bikeController')
const asyncWrapper = require('../middlewares/asyncWrapper')

const router = express.Router()

router.post('/', asyncWrapper(bikeController.createBike))
router.get('/', asyncWrapper(bikeController.getBikes))
router.get('/:id', asyncWrapper(bikeController.getBikeById))
router.patch('/:id', asyncWrapper(bikeController.updateBike))
router.delete('/:id', asyncWrapper(bikeController.deleteBike))

module.exports = router
