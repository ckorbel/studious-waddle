//Note: one way hasing will get the same result every time

const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

const token = jwt.sign(data, '123test');

console.log(token);

// const message = 'I am a users'; 

// const hash = SHA256(message).toString(); 

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// const data = {
//     id: 44,
// };

// const token = {
//     data, 
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }