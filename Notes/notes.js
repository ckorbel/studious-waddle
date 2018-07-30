console.log('notes.js is running');

var addNote = (title, body) => {
    console.log('adding note', title, body);
};

var getAll = () => {
    console.log('getting all notes'); 
}

module.exports = {
    addNote,
    getAll
};