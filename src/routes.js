const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/register', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.patch('/users/:id', UserController.update);
routes.post('/login', UserController.login);

module.exports = routes;