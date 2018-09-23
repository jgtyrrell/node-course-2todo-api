const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndDelete({_id: '5ba78a520a9e9441181f79b0'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndDelete('5ba78a520a9e9441181f79b1').then((todo) => {
    console.log(todo);
});
