import debug from 'debug';
const logger = debug('app:controller');
import { photohomeDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const photohomeController = {

    async getPhotohome( req, res, next ) {

        logger('Photohome get controller called');
        const { result, error } = await photohomeDatamapper.findPhotohome();
        controllerUtil.manageResponse(error, result, res, next);
    },
    
    async createPhotohome( req, res, next ) {

        logger('Photohome create controller called');
        const newPhotohome = req.file;
        const { result, error } = await photohomeDatamapper.insertPhotohome(newPhotohome);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updatePhotohome( req, res, next ) {

        logger('Photohome modify controller called');
        const photohomeModified = req.file;
        const { result, error } = await photohomeDatamapper.modifyPhotohome(photohomeModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removePhotohome( req, res, next ) {

        const { result, error } = await photohomeDatamapper.deletePhotohome();
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default photohomeController;