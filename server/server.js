const express = require('express');
const bodyParser = require('body-parser'); 
const User = require('../database/models/user');
const session = require('express-session');
const passport = require('passport');
const Store = require('connect-session-sequelize')(session.Store);
const { db } = require('../database/connection');
const app = express();
const path = require('path');

/**
 * Create the mySql store; passing in the database connection
 */
const store = new Store({
  db: db
});

if (process.env.MORGAN_LOGGING) {
  app.use(require('morgan')('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Creates a new session
 */
app.use(session({
  name: 'MustardTigers',
  secret: '5 dollar gold club special',
  resave: true,
  saveUninitialized: true,
  store: store
}));


app.use('/api', express.Router()
.use('/users', require('./users'))
.use('/clans', require('./clans'))
.use('/forums', require('./forums'))
);

// Authentication middleware
app.use('/', require('./auth')(passport));

// Serve static files
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

module.exports.app = app;