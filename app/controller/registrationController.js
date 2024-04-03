import debug from 'debug';
const logger = debug('app:controller');
import { registrationDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const registrationController = {

    async getAllRegistration( req, res, next ) {

        logger('Registration getAll Controller called');
        const { result, error } = await registrationDatamapper.findAllregistration();
        controllerUtil.manageResponse(error, result, res, next);
    },

    async createRegistration( req, res, next ) {

        logger('Registration create controller called');
        const newRegistration = req.body;
        const { result, error } = await registrationDatamapper.insertRegistration(newRegistration);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateRegistration( req, res, next ) {

        logger('Registration modify controller called');
        const id = req.params.id;
        const registrationModified = req.body;
        const { result, error } = await registrationDatamapper.modifyRegistration(id, registrationModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeRegistration( req, res, next ) {
        
        const id = req.params.id;
        const { result, error } = await registrationDatamapper.deleteRegistration(id);
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default registrationController;