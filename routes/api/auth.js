//**************** imports ****************//
const express = require('express');

//**************** variables ****************//
const router = express.Router();

/*===========================================
      auth routes
===========================================*/
router.get('/', (req, res) => {
	res.send(`<h2>auth routes</h2>`);
});

module.exports = router;
