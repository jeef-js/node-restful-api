const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

router.post('/register', UserController.store)
router.post('/login', UserController.login)

router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.get('/verify/:id', UserController.verify)

router.delete('/:id', UserController.destroy)

router.patch('/:id', UserController.update)

module.exports = router
