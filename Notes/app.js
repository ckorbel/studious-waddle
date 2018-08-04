const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//created module
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "note was removed" : "note not found";
    console.log(message);
}
else {
    console.log('Command not recognized');
}
