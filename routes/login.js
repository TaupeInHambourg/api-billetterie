var express = require('express');
var router = express.Router();
var db = require('../database');
var bcrypt = require('bcrypt');
var hal = require('../hal');
var jwt = require('../jwt');

//! curl -X POST localhost:3000/login -d "pseudo=FoxPawsOwO&password=a"

/**
** Retourne vrai si l'user est authentifié par le système, faux sinon
* @param {} login
* @param {*} password
* @returnsbcrypt
*/
function authenticate(login, password) {
    const user = db.users.find((user) => {
        return user.pseudo === login && bcrypt.compareSync(password, user.password);
    });

    if (user === undefined) return false;

    return true;
}

function findUserByPseudo(pseudo){
    return db.users.find(user=>user.pseudo === pseudo);
}

/**
** Retourne vrai si l'user est admin, faux sinon
* @param {} pseudo
* @returns
*/

function isAdmin(pseudo){
    const user = findUserByPseudo(pseudo);
    return user && user.isAdmin;
}

router.post('/login', function(req, res, next) {

    // Récupérer le pseudo et le password
    const login = req.body.pseudo;
    const password = req.body.password;

    // Vérifier s'il existe
    if(authenticate(login, password)){

        if(!isAdmin(login, password)){
            res.status(401).send("Il est grand temps de renoncer, mon grand");
            return;
        }

        // TODO: Génération d'un JWT
        const accessToken = jwt.createJWT(login, true, '1 day');

        // TODO: si réussi, fournir un hypermédia (lien vers les réservations pour un concert + access token)

        let responseObject = {
            "_links": [{
                "self": hal.halLinkObject('/login'),
                "book": hal.halLinkObject(`concerts/{id}/reservations`, 'string', '', true)
            }],
            jwt: accessToken,
            message: `Bienvenue ${login} !`,
        }
        res.status(200).format({
            'application/hal+json': function(){
                res.send(responseObject);
            }
        })
    } else {
        // Retourne une erreur en cas de mauvaise authentification
        let responseObject = {
            "_links": [{
                "self": hal.halLinkObject('/login'),
            }],
            jwt: "Vos identifiants sont incorrects"
        }
        // TODO: sinon on retourne un msg d'erreur
        res.status(401).format({
            'application/hal+json': function(){
                res.send(responseObject);
            }
        })
    }

})

module.exports = router;