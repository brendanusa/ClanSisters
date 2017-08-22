const {expect} = require('chai');
const {app} = require('../../server/server');
const request = require('supertest').agent(app);
const {db} = require('../../database/connection');

let testClan = {name: 'test_clan_please_ignore'};

describe('Clans API Endpoint', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('should retrieve an array', (done) => {
    request.get('/api/clans')
      .expect(200)
      .then(res => {
        expect(res.body.results).to.exist;
        expect(res.body.results).to.be.an('array');
        done();
      });
  });

  it('should insert new clans', (done) => {
    request.post('/api/clans')
      .send(testClan)
      .expect(201)
      .then(res => {
        expect(res.body.name).to.equal(testClan.name);
        done();
      });
  });

  it('should retrieve existing clans', (done) => {
    let newClan;

    request.post('/api/clans')
      .send(testClan)
      .expect(201)
      .then(res => {
        newClan = res.body;

        return request.get('/api/clans')
          .expect(200);
      })
      .then(res => {
        expect(res.body.results.length).to.equal(1);
        expect(res.body.results[0].id).to.equal(newClan.id);
        expect(res.body.results[0].name).to.equal(newClan.name);
      })
      .then(() => {
        return request.get(`/api/clans/${newClan.id}`)
          .expect(200);
      })
      .then(res => {
        expect(res.body.results).to.exist;
        expect(res.body.results.id).to.equal(newClan.id);
        expect(res.body.results.name).to.equal(newClan.name);
        done();
      });
  });

  it('should retrieve existing clans with a query', (done) => {
    request.post('/api/clans')
      .send(testClan)
      .expect(201)
      .then(res => {
        newClan = res.body;

        return request.get('/api/clans')
          .query({name: testClan.name});
      })
      .then(res => {
        expect(res.body.results.length).to.equal(1);
        expect(res.body.results[0].id).to.equal(newClan.id);
        expect(res.body.results[0].name).to.equal(newClan.name);
      })
      .then(() => {
        return request.get('/api/clans')
          .query({name: 'Barbara Streisand'});
      })
      .then(res => {
        expect(res.body.results.length).to.equal(0);
        done();
      });
  });
  
  it('should update existing clans', (done) => {
    let row;

    request.post('/api/clans/1')
      .send({name: 'Fred\'s Club'})
      .expect(400)
      .then(() => {
        return request.post('/api/clans')
          .send(testClan)
          .expect(201);
      })
      .then(res => {
        row = res.body.id;

        return request.post(`/api/clans/${row}`)
          .send({name: 'Fred\'s Club'})
          .expect(202);
      })
      .then(() => {
        return request.get(`/api/clans/${row}`)
          .expect(200);
      })
      .then(res => {
        expect(res.body.results.name).to.equal('Fred\'s Club');
        done();
      });
  });

  it('should delete existing clans', (done) => {
    let row;

    request.delete('/api/clans/1')
      .expect(400)
      .then(() => {
        return request.post('/api/clans')
          .send(testClan)
          .expect(201);
      })
      .then(() => {
        return request.delete('/api/clans/1')
          .expect(202);
      })
      .then(() => {
        done();
      });
  });
});
