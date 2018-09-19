const {MongoClient, Server, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, mongoClient) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = mongoClient.db('TodoApp');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Buy groceries'}).then((result) => {
	// 	console.log(result);
	// });

	// // deleteOne
	// db.collection('Todos').deleteOne({text: 'Buy groceries'}).then((result) => {
	// 	console.log(result);
	// });

	// // findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'John'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba2298260db143098b8e67e')}).then((result) => {
		console.log(result);
	});

	mongoClient.close();
});
