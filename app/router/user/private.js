import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { userController } from '../../controller/index.js';
const privateRouter = Router();

privateRouter.get('/user', userController.getAllUser);
privateRouter.get('/user/:id', userController.getOneUser);

privateRouter.patch('/user/:id', userController.updateUser);

privateRouter.delete('/user/:id', userController.removeUser);

logger('Private router initialized');
export default privateRouter;