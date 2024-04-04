import debug from 'debug';
const logger = debug('app:controller');
import { aboutdataDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const aboutdataController = {

    async getAboutdata( req, res, next ) {

        logger('Aboutdata get controller called');
        const { result, error } = await aboutdataDatamapper.findAboutdata();
        controllerUtil.manageResponse(error, result, res, next);
    },
    
    async createAboutdata( req, res, next ) {

        logger('Aboutdata create controller called');
        const newAboutdata = req.body;
        const image = req.file ? req.file.path:null;
        const { result, error } = await aboutdataDatamapper.insertAboutdata(newAboutdata, image);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateAboutdata( req, res, next ) {

        logger('Aboutdata modify controller called');
        const aboutdataModified = req.body;
        const { result, error } = await aboutdataDatamapper.modifyAboutdata(aboutdataModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeAboutdata( req, res, next ) {

        const id = req.params.id;
        const { result, error } = await aboutdataDatamapper.deleteAboutdata(id);
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default aboutdataController;