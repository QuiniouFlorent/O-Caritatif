import debug from 'debug';
const logger = debug('app:controller');
import { commentDatamapper } from '../datamapper/index.js';
import controllerUtil from '../service/util/controller.js';

const commentController = {

    async createComment( req, res, next ) {
        logger('Comment create controller called');
        const newComment = req.body;
        const { result, error } = await commentDatamapper.insertComment(newComment);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateComment( req, res, next ) {
        logger('Comment modify controller called');
        const commentModified = req.body;
        const { result, error } = await commentDatamapper.modifyComment(commentModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeComment( req, res, next ) {
        const commentValues = req.body;
        const { result, error } = await commentDatamapper.deleteComment(commentValues);
        controllerUtil.manageResponse(error, result, res, next);
    }
}

export default commentController;