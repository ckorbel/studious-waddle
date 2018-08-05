console.log('starting app');

setTimeout(() => {
    console.log('its firing');
}, 2000);

setTimeout(() => {
    console.log('2nd one');
}, 0);

console.log('finishing up');