//**************** imports ****************//
const express = require('express');
const connectDB = require('./config/db');



//**************** variables ****************//
const app = express();
const PORT = process.env.Port || 5000;

//**************** database connection ****************//
connectDB();
//**************** route define ****************//
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//**************** app routes ****************//
app.get('/', (req, res) => {
   res.send(`<h2>application running</h2>`);
});




//**************** app listening ****************//
app.listen(PORT, () => {
	console.log(`The server listening at - http://localhost:${PORT}`);
});
