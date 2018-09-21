const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) =>{
		res.send(doc);
	}).catch((err) => {
		res.status(400).send(err);
	});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

module.exports.app = app;

// let user = new User({
// 	email: 'phil@foo.com '
// });

// user.save().then((doc) => {
// 	console.log('Saved new user', doc);
// }).catch((err) => {
// 	console.log('Unable to save new user', err);
// });
