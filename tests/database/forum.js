const {Clan, Forum, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');

let user = {username: 'fred_zirdung', password: 'fred_zirdung'};
let clan = {name: 'test_clan_please_ignore', userId: 0};
let forum = {name: 'test_forum_please_ignore', clanId: 0};

describe('Forum Schema', function() {
  beforeEach(function(done) {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new Forums', function(done) {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(function(newForum) {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal(forum.name);
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('limits the number of new Forums', function(done) {
    let name = forum.name;
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        let newForum = forum;
        name += 'x';
        newForum.name = name;
        return Forum.create(newForum);
      })
      .then(() => {
        throw new Error('A forum limit didnt exist!');
      })
      .catch(error => {
        expect(error.message).to.equal('A clan can only have 5 forums!');
        done();
      });
  });

  it('reads existing Forums', function(done) {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        return Forum.read({id: newForum.id});
      })
      .then(newForum => {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal(forum.name);
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('updates existing forums', function(done) {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(({id}) => {
        forum.id = id;
        return Forum.update({id}, {name: 'TEST'} );
      })
      .then(() => {
        return Forum.read({id: forum.id});
      })
      .then(newForum => {
        expect(newForum).to.exist;
        expect(newForum.name).to.equal('TEST');
        expect(newForum.clanId).to.equal(forum.clanId);
        done();
      });
  });

  it('deletes existing Forums', function(done) {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(({id}) => {
        forum.id = id;
        return Forum.delete({id});
      })
      .then(() => {
        return Forum.read({id: forum.id});
      })
      .then(newForum => {
        expect(newForum).to.equal(null);
        done();
      });
  });
});
