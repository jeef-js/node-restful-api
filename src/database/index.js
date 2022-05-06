const Sequelize = require('sequelize')
const dbConfig = require('../config/databaseConfig')

const User = require('../models/User')

const conn = new Sequelize(dbConfig)

User.init(conn) // Initialize the User model

module.exports = conn
