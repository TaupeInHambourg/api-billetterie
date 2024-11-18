const jwt = require('jsonwebtoken');
const secret = 'mysecret'; //en réalité doit être complexe avec une chaîne de 32 caractères

// TODO : Déclarer un middleware qui vérifiera le jwt retourné par le client
// Il sera réutilisé pour toutes les routes protégées 

/**
** Retourne un jwt signé avec une date d'expiration
* @param {*} login
* @param {*} isAdmin
* @returns
*/

function createJWT(login, isAdmin, expiration = '1 day'){

    return jwt.sign({
        login: login,
        isAdmin: isAdmin,
    },
    secret, {
        expiresIn:expiration
    }
    );
}

module.exports = {createJWT}