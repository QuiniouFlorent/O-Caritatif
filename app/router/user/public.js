import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { userController } from '../../controller/index.js';
import upload from '../../service/multer/multer-config.js';
const publicRouter = Router();

publicRouter.post('/register', upload('user').single('image'), userController.createUser);

logger('Public router initialized');
export default publicRouter;