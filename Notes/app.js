console.log('starting app');

//third party
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//created module
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log('reading note');
} else if (command === 'remove') {
    console.log('removing note');
}
else {
    console.log('Command not recognized');
}
