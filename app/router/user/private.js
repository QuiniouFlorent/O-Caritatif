import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { userController } from '../../controller/index.js';
const privateRouter = Router();

privateRouter.get('/user', userController.getAllUser);

logger('Private router initialized');
export default privateRouter;