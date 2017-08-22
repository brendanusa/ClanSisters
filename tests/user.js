const {User} = require('../database');
const {expect} = require('chai');
const {db} = require('../database/connection');

let user = {username: 'fred_zirdung', password: 'fred_zirdung'};
let user2 = {username: 'test_user_please_ignore', password: 'test_user_please_ignore'};

describe('User Schema', function() {
  beforeEach(function(done) {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new users', function(done) {
    User.model.create(user)
      .then(function(newUser) {
        expect(newUser.id).to.exist;
        expect(newUser.username).to.exist;
        expect(newUser.salt).to.exist;
        expect(newUser.password).to.not.equal(user.password);
        done();
      });
  });

  it('does not allow duplicate users', function(done) {
    User.create(user)
      .then(function(newUser) {
        return User.create(user);
      })
      .catch(function(error) {
        expect(error.message).to.equal('User already exists');
        done();
      });
  });

  it ('validates existing users', function(done) {
    User.create(user)
      .then(function() {
        return User.validate(user);
      })
      .then(function(user) {
        expect(user).to.exist;
        done();
      });
  });

  it ('sanitizes user data on create', function(done) {
    User.create(user)
      .then(function(newUser) {
        expect(newUser.id).to.exist;
        expect(newUser.username).to.exist;
        expect(newUser.salt).to.not.exist;
        expect(newUser.password).to.not.exist;
        done();
      });
  });

  it ('sanitizes user data on read', function(done) {
    User.create(user)
      .then(({id}) => {
        return User.read({id});
      })
      .then(function(newUser) {
        expect(newUser.id).to.exist;
        expect(newUser.username).to.exist;
        expect(newUser.salt).to.not.exist;
        expect(newUser.password).to.not.exist;
        done();
      });
  });

  it ('sanitizes user data on findAll', function(done) {
    User.create(user)
      .then(() => {
        return User.create(user2);
      })
      .then(() => {
        return User.findAll();
      })
      .then(users => {
        users.forEach(user => {
          expect(user.id).to.exist;
          expect(user.username).to.exist;
          expect(user.salt).to.not.exist;
          expect(user.password).to.not.exist;
        });
        done();
      });
  });
});
