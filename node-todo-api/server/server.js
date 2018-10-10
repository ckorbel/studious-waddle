var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

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


app.listen(8080, () => { 
    console.log('running on port 8080') 
});

module.exports = { app };