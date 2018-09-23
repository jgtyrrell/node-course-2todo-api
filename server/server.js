const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
// const {User} = require('./models/user');

const app = express();
app.use(bodyParser.json());

// Creates a new todo.
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

// Retrieves a list of all todos.
app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}).catch((err) => {
		res.status(400).send(err);
	});
});

// Retrieves a todo by ID
app.get('/todos/:id', (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	
	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((err) => res.status(400).send());
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

module.exports.app = app;
