const { app } = require('./server');
const { db } = require('../database/connection');

db.sync().then(() => {
  app.listen(process.env.PORT || 3000);
});