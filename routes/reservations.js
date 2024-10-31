var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET concerts page. */
router.get('/reservations', function(req, res, next) {
  res.status(200).json(db.reservations);
});

module.exports = router;
