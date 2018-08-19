var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked');
        resolve();
        reject('Unable to fufill promise');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Succees: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});

//once you set a promises state to either fufilled or rejected you can't set it again