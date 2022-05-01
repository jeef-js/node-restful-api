const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

const conn = new Sequelize(dbConfig);

module.exports = conn;