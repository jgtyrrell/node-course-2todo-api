const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ba7757ba5bfe53100c21c81';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Mongoose can auto convert a string to an ObjectID.
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.error('ID not found');
    }
    console.log('Todo by ID', todo);
}).catch((err) => console.error(err));

// Challenge

// var id = '5ba26de87cd294162cffe429';

// User.findById(id).then((user) => {
//     if (!user) {
//         return console.error('User not found');
//     }
//     console.log('User', user);
// }).catch((err) => console.error(err));
