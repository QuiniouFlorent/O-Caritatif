import debug from 'debug';
const logger = debug('app:error');

import APIerror from './APIerror.js';

const errorService = {
    manageError(err, req, res, _) {
        logger(err);
        res.status(err.infos.statusCode).json({
            status: 'error', data: {
                name: err.name, message: err.message,},});
    },
    _404(req, res, next) {
        next(new APIerror('URL non trouvée', 404));
    }
};

export default errorService;