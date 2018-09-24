const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// Basic hashing using a one-way algorithim
// var message = 'I am user number 3';
// var hash = SHA256(message);

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // Trying to manipulate the data will fail because the hash will no longer match that in the token.
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }

var data = {
    id: 10
};

var token = jwt.sign(data, 'abc123');
console.log('Token', token);

var decoded = jwt.verify(token, 'abc123');
console.log('Decoded', decoded);
