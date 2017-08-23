const router = require('express').Router();
const {User} = require('../../database');

router.post('/login', (req, res) => {
  // TODO - Implement with passport
});

router.all('/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy(() => {
      res.status(201).send('User successfully logged out');
    });
  } else {
    res.status(401).send('User not logged in');
  }
});

module.exports = router;