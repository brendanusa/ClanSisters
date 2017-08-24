const router = require('express').Router();
const userSerialization = require('./user');
const steamAuth = require('./strategies/steam');
const auth = require('../authMiddleware');

module.exports = (passport, userModel) => {
  userSerialization(passport, userModel);
  steamAuth(passport, userModel);
  
  // Steam OAuth
  router.get('/auth/steam', passport.authenticate('steam'));
  router.get('/auth/steam/callback', passport.authenticate('steam', {successRedirect: '/', failureRedirect: '/login'}));

  router.get('/login', auth.isNotLoggedIn('redirect'));
  router.get('/', auth.isLoggedIn('redirect'));

  // Destroys session for local auth or any OAuth
  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  return router;
};