const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.post('/users/register', UserController.store)
routes.post('/users/login', UserController.login)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.delete('/users/:id', UserController.destroy)
routes.patch('/users/:id', UserController.update)
routes.get('/users/verify/:id', UserController.verify)

/* const auth = require('./middlewares/auth')

routes.use(auth)

routes.get('/auth', (req, res) => {
  res.json({
    message: 'Done!',
    userId: req.user.id
  })
}) */

module.exports = routes
