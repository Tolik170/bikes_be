const express = require('express')

const user = require('./userRoutes')
const bike = require('./bikeRoutes')

const router = express.Router()

router.use('/users', user)
router.use('/bikes', bike)

module.exports = router
