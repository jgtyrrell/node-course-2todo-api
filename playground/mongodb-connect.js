// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// How to generate an ObjectID manually
var obj = new ObjectID();
console.log(obj);

// ES6 Object destructuring example.
var user = {name: 'James', age: 45};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo.', err);
	// 	}
	// 	console.log(result.ops);
	// });

	db.collection('Users').insertOne({
		name: 'John',
		age: 40,
		location: 'Chippenham'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user.', err);
		}
		console.log(result.ops);
		console.log(result.ops[0]._id.getTimestamp()); // How to extract created timestamp from an ObjectID.
	});

	client.close();
});
