console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString('Chris'));
console.log(_.uniq([1,'Chris',2,3,1,4,5,'Chris',11]));


// let res = notes.add(2, 4);
// console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello World', (err) => {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);