const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return test response', (done) => {
    request(app) //pass entire express app in request()
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'page not found'
            })
        })
        .end(done);
});


it('should return array of objects', (done) => {
    request(app) //pass entire express app in request()
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