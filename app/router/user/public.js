import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { userController } from '../../controller/index.js';
const publicRouter = Router();

publicRouter.post('/register', userController.createUser);

logger('Public router initialized');
export default publicRouter;