import debug from 'debug';
const logger2 = debug('app:error');
import logger from '../logs/logger.js';

import APIerror from './APIerror.js';

const errorService = {
    manageError(err, req, res, _) {
        const requestData = { method: req.method, path: req.path }
        logger.error(`Error : ${err.code}, ${err.message} ; additionnalData : ${requestData.method}, ${requestData.path}`);
        logger2(err); 
        res.status(err.code).json({
            status: `Error :`, data: {
                name: err.name, message: err.message, code: err.code},});
    },
    _404(req, res, next) {
        next(new APIerror('URL not found', 404));
    }
};

export default errorService;