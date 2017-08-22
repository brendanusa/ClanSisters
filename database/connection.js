const Sequelize = require('sequelize');
const config = require('./configParser.js');

const db = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
  Sequelize,
  db
};