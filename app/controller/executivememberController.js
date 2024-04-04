import debug from 'debug';
const logger = debug('app:controller');
import { executivememberDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const executivememberController = {

    async getAllExecutivemember( req, res, next ) {

        logger('Executivemember getAll controller called');
        const { result, error } = await executivememberDatamapper.findAllExecutivemember();
        controllerUtil.manageResponse(error, result, res, next);
    },

    async getOneExecutivemember( req, res, next ) {

        logger('Executivemember getOne controller called');
        const id = req.params.id;
        const { result, error } = await executivememberDatamapper.findOneExecutivemember(id);
        controllerUtil.manageResponse(error, result, res, next);
    },
    
    async createExecutivemember( req, res, next ) {

        logger('Executivemember create controller called');
        const newExecutivemember = req.body;
        const image = req.file ? req.file.path:null;
        const { result, error } = await executivememberDatamapper.insertExecutivemember(newExecutivemember, image);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateExecutivemember( req, res, next ) {

        logger('Executivemember modify controller called');
        const id = req.params.id;
        const executivememberModified = req.body;
        const { result, error } = await executivememberDatamapper.modifyExecutivemember(executivememberModified, id);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateExecutivememberPhoto( req, res, next ) {

        logger('Executivemember modify Photo controller called');
        const id = req.params.id;
        const image = req.file ? req.file.path:null;
        const { result, error } = await executivememberDatamapper.modifyExecutivememberPhoto(id, image);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeExecutivemember( req, res, next ) {

        const id = req.params.id;
        const { result, error } = await executivememberDatamapper.deleteExecutivemember(id);
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default executivememberController;