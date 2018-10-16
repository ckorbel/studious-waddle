var mongoose = require('mongoose');
var validator = require('validator');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        minlength: 1, 
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 5,
    }, 
    tokens: [{
        access: {
            type: String, 
            required: true
        },
        token: {
            type: String, 
            required: true
        }
    }]
});

module.exports = { User };



// What is looks like just for reference:
// {
//     email: 'email@email.com',
//     password: 'thisshouldbeencrypted',
//     tokens: [{
//         access: 'auth',
//         token: 'thisistotallyunreadable'
//     }]
// }