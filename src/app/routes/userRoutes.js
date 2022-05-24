const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.post('/signup', UserController.store)
router.post('/signin', UserController.signin)
router.post('/forgot', UserController.forgotPassword)
router.post('/reset', UserController.resetPassword)

router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.get('/verify/:token', UserController.verify)

router.delete('/:id', UserController.destroy)

router.patch('/:id', UserController.update)

module.exports = router
