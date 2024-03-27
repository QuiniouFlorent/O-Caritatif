import debug from 'debug';
const logger = debug('app:controller');
import { commentDatamapper } from '../datamapper/index.js';

const commentController = {

    async createComment(req, res) {
        logger('Comment create controller called');
        const newComment = req.body;
        const comment = await commentDatamapper.insertComment(newComment)
        res.json(comment);
    },

    async updateComment(req, res) {
        logger('Comment modify controller called');
        const commentModified = req.body;
        const comment = await commentDatamapper.modifyComment(commentModified);
        res.json(comment);
    },

    async removeComment(req,res) {
        const commentValues = req.body;
        const comment = await commentDatamapper.deleteComment(commentValues);
        res.json(comment);
    }
}

logger('Comment controller initialized');
export default commentController;