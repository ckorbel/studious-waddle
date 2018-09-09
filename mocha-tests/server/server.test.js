const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

//express api tests
describe('Server', () => {
    describe('#GET /', () => {
        it('should return test response', (done) => {
            request(app) //pass express app in request()
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'page not found'
                    })
                })
                .end(done);
        });
    });

    describe('#GET /users', () => {
        it('should return array of objects', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Chris',
                        age: 30
                    })
                })
                .end(done);
        });
    });

    describe('#GET /profiles', () => {
        it('should return object with info', (done) => {
            request(app)
                .get('/profiles')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toBeA('object')
                        .toInclude({
                            name: 'Delina'
                        })
                })
                .end(done);
        })
    });
});

