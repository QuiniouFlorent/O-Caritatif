import debug from 'debug';
const logger = debug('app:controller');
import { aboutdataDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const aboutdataController = {

    async getAllAboutdata( req, res, next ) {

        logger('Aboutdata getAll controller called');
        const { result, error } = await aboutdataDatamapper.findAboutdata();
        controllerUtil.manageResponse(error, result, res, next);
    },
    
    async createAboutdata( req, res, next ) {

        logger('Aboutdata create controller called');
        const newAboutdata = req.body;
        const { result, error } = await aboutdataDatamapper.insertAboutdata(newAboutdata);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateAboutdata( req, res, next ) {

        logger('Aboutdata modify controller called');
        const aboutdataModified = req.body;
        const { result, error } = await aboutdataDatamapper.modifyAboutdata(aboutdataModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeAboutdata( req, res, next ) {

        const { result, error } = await aboutdataDatamapper.deleteAboutdata();
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default aboutdataController;