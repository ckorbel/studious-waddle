const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');


const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


const app = express();

//middleware for sending json to express app
app.use(bodyParser.json());

//routes 
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos }); 
    }, (e) => {
        res.status(400),send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        console.log(id);
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            console.log(id);
            return res.status(404).send();
        }

        res.send({todo}); 
    }).catch((e) => {
        res.status(400).send();
    });
});

//delete one by ID
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id; 

    if(!ObjectID.isValid(id)) {
        console.log(id);
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            console.log(id);
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

//update a todo
app.patch('/todos/:id', (req, res) => {
    const id = req.params.id; 
    const body = _.pick(req.body, ['text', 'completed']);  //user only update these fields

    if(!ObjectID.isValid(id)) {
        console.log(id);
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, { new: true }).then((todo) => {
        if (!todo) {
            console.log(id);
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    });

});


//User routes 

//Create new user
app.post('/users', (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);

    const user = new User(body);

    user.save().then((user) => {
        res.send(user); 
    }).catch((err) => {
        res.status(400).send(err);
    });
});



app.listen(8080, () => { 
    console.log('running on port 8080') 
});

module.exports = { app };