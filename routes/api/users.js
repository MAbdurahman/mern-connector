//**************** imports ****************//
const express = require('express');

//**************** variables ****************//
const router = express.Router();

/*===========================================
      user routes
===========================================*/
router.get('/', (req, res) => {
	res.send(`<h2>user routes</h2>`);
});


module.exports = router;
