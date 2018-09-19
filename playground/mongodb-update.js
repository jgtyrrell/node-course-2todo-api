const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, mongoClient) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = mongoClient.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: ObjectID('5ba22dd611f77f2a841a9b3a')
	// }, {
	// 	// One of MongoDB's update operators
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: ObjectID('5ba2588f11f77f2a841a9b3b')
	}, {
		$set: {
			name: 'Philip'
		},
		$inc: {
			age: 3
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	mongoClient.close();
});
