var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.status(200).json(db.users);
});

module.exports = router;