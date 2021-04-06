//**************** imports ****************//
const express = require('express');





//**************** variables ****************//
const app = express();
const PORT = process.env.Port || 5000;


//**************** app routes ****************//
app.get('/', (req, res) => {
   res.send(`<h2>application running</h2>`);
});




//**************** app listening ****************//
app.listen(PORT, () => {
	console.log(`The server listening at - http://localhost:${PORT}`);
});
