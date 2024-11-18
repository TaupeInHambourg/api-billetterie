var express = require('express');
var router = express.Router();
var db = require('../database');
var hal = require('../hal');
var { checkTokenMiddleware } = require("../jwt");

/** 
* GET page (protégée) réservations d'un concert.
* le middleware checkTokenMiddleware est appelé, puis celui qui est déclanché si next()
**/
router.get(
  '/concerts/:id(\\d+)/reservation', 
  checkTokenMiddleware, 
  function(req, res, next) {
    console.log("page des réservations")
  }
);

module.exports = router;
