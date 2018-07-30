console.log('notes.js is running');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch(err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes)); 
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title, 
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title; 
    }); 

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    }
};

var getAll = () => {
    console.log('getting all notes'); 
};

var getNote = (title) => {
    console.log('getting note', title);
};

var removeNote = (title) => {
    console.log(`removing note ${title}`);
};

module.exports = {
    addNote,
    getAll, 
    getNote, 
    removeNote
};