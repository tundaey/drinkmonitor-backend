process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/db/connection');

describe('routes : locations', ()=> {
    beforeEach(()=> {
        console.log('before each')
        return knex.migrate.rollback()
        .then(()=> knex.migrate.latest())
        .then(()=> knex.seed.run())
       
        console.log('ran migrate')
        
    });

    afterEach(()=> { return knex.migrate.rollback()})

    describe('GET /api/v1/locations', ()=> {
        it('should return all locations', (done)=> {
            chai.request(server)
            .get('/api/v1/locations')
            .end((err, res)=> {
                //should.not.exist(err);
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.status.should.eql('success');
                res.body.data.length.should.eql(1);
                res.body.data[0].should.include.keys(
                    'id', 'longitude', 'latitude'
                );
                done();
            })
        })
    })

    describe('POST /api/v1/locations', ()=> {
        it('should return the location was added', (done)=> {
            chai.request(server)
            .post('/api/v1/locations')
            .send({
                longitude: '52.477999',
                latitude: '-1.898754'
            })
            .end((err, res)=> {
                should.not.exist(err)
                res.status.should.equal(201)
                res.type.should.equal('application/json');
                res.body.status.should.eql('success');
                res.body.data[0].should.include.keys(
                    'id', 'longitude', 'latitude'
                );
                done();
            })
        })
    })
})