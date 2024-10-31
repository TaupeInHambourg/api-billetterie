var express = require('express');
var router = express.Router();
var db = require('../database');
var hal = require('../hal');

/* GET concerts page. */
router.get('/concerts', function(req, res, next) {
  const ressourceObject = hal.mapConcertListToRessourceObject(db.concerts);
  res.status(200).json(ressourceObject);
});

router.get('/concerts/:id(\\d+)', function(req, res, next) {

  // Récupérer l'id renseigné dans le path
  const id = req.params.id;

  // Trouver le concert
  const concert = db.concerts.find((concert) => concert.id == id);

  if(concert === undefined){
    res.status(404).json({})
  }

  const concertResourceObject = hal.mapConcertoResourceObject(concert);

  res.status(200).json(concertResourceObject);

});

module.exports = router;
