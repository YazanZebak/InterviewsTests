const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // https://github.com/Automattic/mongoose/issues/4291

const URI = process.env.MONGODB_URI;

mongoose
	.connect(process.env.MONGODB_URI)
	.then((db) => console.log('Connected To Database.'))
	.catch((err) => console.error(err));

module.exports = mongoose;