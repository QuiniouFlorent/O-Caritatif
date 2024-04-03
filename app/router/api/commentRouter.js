import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { commentController } from '../../controller/index.js';
const commentRouter = Router();

commentRouter.get('/comment', commentController.getAllComment);

commentRouter.post('/comment', commentController.createComment);

commentRouter.patch('/comment/:id', commentController.updateComment);

commentRouter.delete('/comment/:id', commentController.removeComment);

export default commentRouter;