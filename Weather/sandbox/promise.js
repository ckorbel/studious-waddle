//promise chaining synchonous two things 

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33)
}, (err) => {
    console.log(err);
}).then((res, err) => {   //chaining promise together
    console.log(`Should be 45`, res);
}).catch((err) => {
    console.log(err);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked');
//         resolve();
//         reject('Unable to fufill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Succees: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });

//once you set a promises state to either fufilled or rejected you can't set it again