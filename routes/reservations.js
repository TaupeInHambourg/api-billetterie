var express = require('express');
var router = express.Router();
var db = require('../database');
var hal = require('../hal');

/* GET page (protégée) réservations d'un concert. */
router.get('/concert/:id(\\d+)/reservation', function(req, res, next) {
  res.status(200).json(db.reservations);
});

module.exports = router;
