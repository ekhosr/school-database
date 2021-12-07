const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.ATLAS_DB || 'mongodb://localhost/teacherDatabase', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(db => {
		console.log('successfull database connection')
	})
	.catch(err => {
		console.log('Database Connection erorr', err)
	})