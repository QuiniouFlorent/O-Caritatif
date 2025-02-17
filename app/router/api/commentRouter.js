import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { commentController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const commentRouter = Router();

commentRouter.get('/comment', commentController.getAllComment);

commentRouter.post('/comment', authentification.isAuthentificated, commentController.createComment);

commentRouter.patch('/comment/:id', authentification.isAuthentificated, commentController.updateComment);

commentRouter.delete('/comment/:id', authentification.isAuthentificated, commentController.removeComment);

export default commentRouter;