const { MongoClient, ObjectID } = require('mongodb');

//query practice
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((results) => {
    //     console.log(results);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndReplace
    // db.collection('Users').deleteMany({ name: 'Tyler' }).then((results) => {
    //     console.log(results);
    // });

    //findAndDeleteOne
    // db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b94348d826e933454d25570") }).then(() => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

    //findOneAndUpdate(filter, update, options, callback) <= 4 arguments
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b94333656c5ba41fca5b6fc')
    // },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b9588c3cc6acb2ef8b4b80e')
    },
        {
            $set: {
                name: 'Chris'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // client.close();
});