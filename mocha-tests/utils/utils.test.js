const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
    var results = utils.add(33, 11);
    expect(results).toBe(44).toBeA('number');
});


it('should return square of number', () => {
    var results = utils.square(16);
    expect(results).toBe(256).toBeA('number');
});


//async test
it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async return square of number', (done) => {
    utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
    });
});
//mocha warns you when tests take a long time setTimeout

//object test
it('should set firstName and lastName', () => {
    var user = {
        location: 'San Jose',
        age: 22,
    }
    var results = utils.setName(user, 'Chris Korbel')
    expect(results).toInclude({
        firstName: 'Chris',
        lastName: 'Korbel'
    });
    // expect(user).toEqual(results); //objects update by reference in JS so this should pass
});

//toBe would check if they are exact same === and they are two different objects so test will fail instead must use .toEqual() or .toNotEqual for objects and arrays


// it('should expext some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({ name: 'Chris' }).toNotEqual({ name: 'chris' }); 
//     //expect([2, 3, 4]).toExclude(1);
//     expect({
//         name: 'Chris',
//         age: 30,
//         location: 'Cleveland'
//     }).toInclude({
//         age: 30
//     })
// });