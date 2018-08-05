//arrow function keyword doesn't come with the this binding. It refers to the global this and isn't bound to the object
//sayHiAlt is example of alternative to access the this binding
var user = {
    name: 'Chris',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};
//user.sayHi()
user.sayHiAlt(1, 2, 3);