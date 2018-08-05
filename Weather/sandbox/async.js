// console.log('starting app');

// setTimeout(() => {
//     console.log('its firing');
// }, 2000);

// setTimeout(() => {
//     console.log('2nd one');
// }, 0);

// console.log('finishing up');

//Callbacks.js

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Chris'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(1, (user) => {
    console.log(user);
});
