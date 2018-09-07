const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'page not found',
        name: 'App v.1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Chris',
            age: 30
        },
        {
            name: 'Delina',
            age: 30
        }
    ]);
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});

module.exports.app = app; 