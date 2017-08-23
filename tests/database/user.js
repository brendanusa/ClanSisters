const {User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');
const mockDB = require('../mockDB.json');

let user = mockDB.users[0];
let user2 = mockDB.users[1];

describe('User Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new users', (done) => {
    User.model.create(user)
      .then((newUser) => {
        expect(newUser.id).to.exist;
        expect(newUser.steam_id).to.exist;
        expect(newUser.steam_avatar_image_url).to.exist;
        expect(newUser.steam_profile_url).to.exist;
        expect(newUser.steam_screen_name).to.exist;
        expect(newUser.steam_real_name).to.exist;
        done();
      });
  });
});
