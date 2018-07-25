console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.add(2, 4);
console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello World', (err) => {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);