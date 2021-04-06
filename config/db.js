//**************** imports ****************//
const mongoose = require('mongoose');
const config = require('config');


//**************** variables ****************//
const db = config.get('mongoURI');

//**************** database connection ****************//
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
      console.log('MongoDB connected with mongoose...');
	} catch (error) {
		console.error(error.message);
      process.exit(1);
	}
};


module.exports = connectDB;