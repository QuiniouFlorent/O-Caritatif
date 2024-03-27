import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { commentController } from '../../controller/index.js';
const commentRouter = Router();

commentRouter.post('/comment', commentController.createComment);

commentRouter.patch('/comment', commentController.updateComment);

commentRouter.delete('/comment', commentController.removeComment);


logger('Comment router initialized');
export default commentRouter;