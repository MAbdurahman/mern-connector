//**************** imports ****************//
const express = require('express');
const connectDB = require('./config/db');



//**************** variables ****************//
const app = express();
const PORT = process.env.Port || 5000;

//**************** database connection ****************//
connectDB();
//**************** app routes ****************//
app.get('/', (req, res) => {
   res.send(`<h2>application running</h2>`);
});




//**************** app listening ****************//
app.listen(PORT, () => {
	console.log(`The server listening at - http://localhost:${PORT}`);
});
