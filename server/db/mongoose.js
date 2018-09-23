const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Tell mongoose to use native promises.

mongoose.connect(proess.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};
