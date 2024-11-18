const jwt = require('jsonwebtoken');
const fs = require('fs');

const EXPIRATION = '1 day';
const SECRET = fs.readFileSync('private.key');

// TODO : Déclarer un middleware qui vérifiera le jwt retourné par le client
// Il sera réutilisé pour toutes les routes protégées 

const extractBearerToken = headervalue => {

    if(typeof headervalue !== 'string'){
        return false;
    }
    const matches = headervalue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}


const checkTokenMiddleware = (req, res, next) => {

    //Le JWT est placé dans le header Authorization
    //Recupere le jwt envoyé par le client
    const token  = req.headers.authorization && extractBearerToken(req.headers.authorization);
    
    if(!token){
        return res.status(401).json({"msg":"Vous n'êtes pas authorisé à acceder à cette ressource."})
    }
    
    //vérification du jwt
    jwt.verify(token, SECRET, (err, decodedToken) => {
        //la vérification a échoué
        if(err){
            return res.status(401).json({"msg":"Vous n'êtes pas authorisé à acceder à cette ressource."})
        }
        // la vérification a réussi
        console.log("Token vérifié!")
    })
    next();
}

/**
** Retourne un jwt signé avec une date d'expiration
* @param {*} login
* @param {*} isAdmin
* @returns
*/

function createJWT(login, isAdmin, expiration = EXPIRATION){

    return jwt.sign({
        login: login,
        isAdmin: isAdmin,
    },
    SECRET, {
        expiresIn:expiration
    }
    );
}

module.exports = {createJWT, checkTokenMiddleware}