const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);


    it('should call the spy', () => {
        var spy = expect.createSpy();
        spy('Chris', 30);
        expect(spy).toHaveBeenCalledWith('Chris', 30);
    });

    it('should call saved user with user obj', () => {
        var email = 'test@email.com';
        var password = 'password';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});