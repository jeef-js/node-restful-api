const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

module.exports = routes;