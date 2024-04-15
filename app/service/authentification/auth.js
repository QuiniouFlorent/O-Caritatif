import debug from 'debug';
const logger = debug('app:authentification');
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import APIerror from '../error/APIerror.js';

const authentification = {

    isAuthentificated(req, res, next) {

        const token = req.headers.authorization;
        
        if(!token) {
            return next(new APIerror('No token provided', 403));
        }
        const verifytoken = token.split(' ')[1];
        const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);
        if(decoded) {
            req.user = decoded;
            next();
        } else {
            return next(new APIerror('Invalid token', 401));
        }
    },

    isResponsableOrAdmin(req, res, next) {

        const token = req.headers.authorization;

        if(!token) {
            return next(new APIerror('No token provided', 403));
        }
        const verifytoken = token.split(' ')[1];
        const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);

        if(decoded.role === 'responsable' || decoded.role ==='administrateur') {
            req.user = decoded;
            next();
        } else {
            return next(new APIerror('Access denied. You must be a manager or administrator ', 403))
        }
    },

    isAdmin(req, res, next) {

        const token = req.headers.authorization;

        if(!token) {

            return next(new APIerror('No token provided', 403));

        } else {
            const verifytoken = token.split(' ')[1];
            const decoded = jwt.verify(verifytoken, process.env.JWT_SECRET);
        
            if(decoded.role ==='administrateur') {

            next();

            } else {
                return next(new APIerror('Access denied. You must be a manager', 403))
            }
        }
    },

    isValidToken(req, res, next) {
        
        const token = req.params.token;
        logger(token);
        const validToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!validToken) {
            return next(new APIerror('Invalid token or token expired'));
        }
    }
};

export default authentification;