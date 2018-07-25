console.log('notes.js is running');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}; 

module.exports.add = (a, b) => {
    return a + b; 
};