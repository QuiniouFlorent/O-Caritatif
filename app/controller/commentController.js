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
//TODO : id ??
    async updateComment(req, res) {
        logger('Comment modify controller called');
        const id = req.params.id;
        const commentModified = req.body;
        const comment = await commentDatamapper.modifyComment(id, commentModified);
        res.json(comment);
    },
//TODO : id ??
    async removeComment(req,res) {
        const id = req.params.id;
        const comment = await commentDatamapper.deleteComment(id);
        res.json(comment);
    }
}

logger('Comment controller initialized');
export default commentController;