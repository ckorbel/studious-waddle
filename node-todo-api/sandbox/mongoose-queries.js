
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose'); 
const { Todo } = require('./../server/models/todo'); 
const { User } = require('./../server/models/user'); 

var id = "5bbcf1f8b81e40143870efa9";

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

//different query methods for mongoose 
Todo.find({
    _id: id
}).then((todos) => {
    if (!todo) {
        return console.log('Unable to located document by that id');
    }
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
})
.then((todo) => {
    if (!todo) {
        return console.log('Unable to located document by that id');
    }
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Unable to located document by that id');
    }
    console.log('Todo', todo);
}).catch((err) => {
    console.log('unable to find id', err);
});

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unanle to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

