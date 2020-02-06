const Sequelize = require('sequelize');
const dbConfig = require('../config/DBConfig');

const database = new Sequelize(dbConfig);

module.exports = database;