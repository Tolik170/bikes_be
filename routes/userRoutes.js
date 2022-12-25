const express = require('express')
const userController = require('../controllers/userController')
const asyncWrapper = require('../middlewares/asyncWrapper')

const router = express.Router()

router.param('id', (req, res, next, id) => {
  console.log('user id is', id)
  next()
})

router.get('/', asyncWrapper(userController.getUsers))
router.get('/:id', asyncWrapper(userController.getUserById))
router.patch('/:id', asyncWrapper(userController.updateUser))
router.delete('/:id', asyncWrapper(userController.deleteUser))

module.exports = router
