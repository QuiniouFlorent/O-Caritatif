import debug from 'debug';
const logger = debug('app:authentification');
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import APIerror from '../error/APIerror.js';

const authentification = {

    isAuthentificated(req, res, next) {

        const token = req.headers.authorization;
        
        if(!token) {
            return next(new APIerror('Aucun token fourni', 403));
        }
        const verifytoken = token.split(' ')[1];
        const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);
        if(decoded) {
            req.user = decoded;
            next();
        } else {
            return next(new APIerror('Votre token n\'est pas valide', 401));
        }
    },

    isResponsableOrAdmin(req, res, next) {

        const token = req.headers.authorization;

        if(!token) {
            return next(new APIerror('Aucun token fourni', 403));
        }
        const verifytoken = token.split(' ')[1];
        const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);

        if(decoded.role === 'responsable' || decoded.role ==='administrateur') {
            req.user = decoded;
            next();
        } else {
            return next(new APIerror('Accès refusé. Vous devez être responsable ou administrateur', 403))
        }
    },

    isAdmin(req, res, next) {

        const token = req.headers.authorization;

        if(!token) {

            return next(new APIerror('Aucun token fourni', 403));

        } else {
            const verifytoken = token.split(' ')[1];
            const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);
        
            if(decoded.role ==='administrateur') {

            next();

            } else {
                return next(new APIerror('Accès refusé. Vous devez être administrateur', 403))
            }
        }
    },

    isValidToken(req, res, next) {
        
        const token = req.params.token;
        logger(token);
        const validToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!validToken) {
            return next(new APIerror('Token expiré ou token invalide'));
        }
    }
};

export default authentification;