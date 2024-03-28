import debug from 'debug';
const logger = debug('app:authentification');
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authentification = {
    isAuthentificated(req, res, next) {
        const token = req.headers.authorization.split(' ')[1];
        logger('authorization', req.headers.authorization);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        logger('decoded', decoded);
        if(decoded){
            req.user = decoded;
            next();
        } else {
            throw new Error('Token non valide');
            //next()
        }
    }
};

export default authentification;