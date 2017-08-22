let config = require('./config.json');
let env = process.env.NODE_ENV || 'development';
let currentConfig = config[env];

module.exports = currentConfig;