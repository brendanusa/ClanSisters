const {Clan, User} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');

let user = {username: 'fred_zirdung', password: 'fred_zirdung'};
let clan = {name: 'test_clan_please_ignore', userId: 0};

describe('Clan Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('inserts new clans', (done) => {
    User.create(user)
      .then(newUser => {
        clan.creatorId = newUser.id;
        return Clan.create(clan);
      })
      .then((newClan) => {
        expect(newClan).to.exist;
        expect(newClan.name).to.equal(clan.name);
        expect(newClan.creatorId).to.equal(clan.creatorId);
        done();
      });
  });

  it('does not allow duplicate clans', (done) => {
    User.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(newClan => {
        return Clan.create(clan);
      })
      .catch((error) => {
        expect(error.message).to.equal('Clan already exists');
        done();
      });
  });

  it ('returns clan data on read', (done) => {
    User.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(({id}) => {
        return Clan.read({id});
      })
      .then((newClan) => {
        expect(newClan.id).to.exist;
        expect(newClan.name).to.exist;
        done();
      });
  });

  it ('updates clan data', (done) => {
    User.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(({id}) => {
        clan.id = id;
        return Clan.update({id}, {name: 'TEST'});
      })
      .then(() => {
        return Clan.read(clan.id);
      })
      .then((newClan) => {
        expect(newClan.id).to.exist;
        expect(newClan.name).to.equal('TEST');
        done();
      });
  });

  it ('deletes clan data', (done) => {
    User.create(user)
      .then((newUser) => {
        clan.userId = newUser.id;
        return Clan.create(clan);
      })
      .then(({id}) => {
        clan.id = id;
        return Clan.delete({id});
      })
      .then(() => {
        return Clan.read(clan.id);
      })
      .then((newClan) => {
        expect(newClan).to.equal(null);
        done();
      });
  });

  it('does not allow a single user more than 5 clans', (done) => {
    User.create(user)
      .then((newUser) => {
        clan.creatorId = newUser.id;
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(clan);
      })
      .then(newClan => {
        clan.name = clan.name + 'x';
        return Clan.create(clan);
      })
      .then(() => {
        throw new Error('A clan limit didnt exist!');
      })
      .catch((error) => {
        expect(error.message).to.equal('A user can only have 5 clans!');
        done();
      });
  });
});
