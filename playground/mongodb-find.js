const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 	// completed: false
	// 	// _id: new ObjectID('5ba2206111f77f2a841a9b39')
	// }).count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }).catch((err) => {
	// 	console.log('Unable to fetch count of todos.', err);
	// });

	// db.collection('Todos').find({
	// 	// completed: false
	// 	// _id: new ObjectID('5ba2206111f77f2a841a9b39')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }).catch((err) => {
	// 	console.log('Unable to fetch todos.', err);
	// });

	db.collection('Users').find({
		name: 'Jack'
	}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}).catch((err) => {
		console.log('Unable to fetch useros.', err);
	});

	client.close();
});
