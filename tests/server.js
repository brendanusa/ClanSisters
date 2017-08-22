const supertest = require('supertest');
const { app } = require('../server/server');
const request = supertest.agent(app);
const { User, Clan, Member } = require('../database');
const {db} = require('../database/connection');
const {expect} = require('chai');

let user = {username: 'fred_zirdung', password: 'fred_zirdung'};
let user2 = {username: 'test_user_please_ignore', password: 'test_user_please_ignore'};
let clan = {name: 'test_clan_please_ignore', userId: 0};

/**
 * @todo Double check with the database that changes went through.
 */
describe('Express Middleware', function() {
  
  let user = {username: 'fred_zirdung', password: 'fred_zirdung'};

  beforeEach(function(done) {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('should have index.html', function(done) {
    request.get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .then(() => {
        done();
      });
  });

  it('should have users', function(done) {
    request.get('/api/users')
      .expect(200)
      .then(() => {
        done();
      });
  });

  it('should return users from get to /users/:user', function(done) {
    User.create(user)
      .then(newUser => {
        return request.get(`/api/users/${newUser.id}`)
          .expect(200)
          .expect('Content-Type', /json/);
      })
      .then(() => {
        done();
      });
  });

  it('should create a new user with post to /users ', function(done) {
    request.post('/api/users')
      .send({username: 'foo', password: 'bar'})
      .set('Content-Type', 'application/json')
      .expect(200)
      .then(() => {
        done();
      });
  });

  it('should delete a new user with delete to /users ', function(done) {
    User.create(user)
      .then(newUser => {
        return request.delete(`/api/users/${newUser.id}`)
          .expect(200);
      })
      .then(() => {
        done();
      });
  });

  it('should create a new member with post to /users/:user/members/ ', function(done) {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(newClan => {
        return request.post(`/api/users/${clan.userId}/members`)
          .send({clanId: newClan.id})
          .set('Content-Type', 'application/json')
          .expect(200);
      })
      .then(() => {
        done();
      });
  });

  it('should remove membership with delete to /users/:user/members/:member', function(done) {
    let userId;
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        return request.post(`/api/users/${clan.userId}/members`)
          .send({clanId: newClan.id})
          .set('Content-Type', 'application/json')
          .expect(200);
      })
      .then(response => {
        return request.delete(`/api/users/${clan.userId}/members/${clan.id}`);
      })
      .then(response => {
        expect(response.body.clanId).to.equal(String(clan.id));
        expect(response.body.userId).to.equal(String(clan.userId));
        done();
      });
  });
});
