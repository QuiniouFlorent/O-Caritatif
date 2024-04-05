import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { userController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const privateRouter = Router();

privateRouter.get('/user', authentification.isAdmin, userController.getAllUser);
privateRouter.get('/user/:id', authentification.isAuthentificated, userController.getOneUser);
privateRouter.get('/user/:id/registration', authentification.isAuthentificated, userController.getRegistrationByUser);

privateRouter.patch('/user/:id', authentification.isAuthentificated, userController.updateUser);
privateRouter.patch('/user/:id/photo', upload('user').single('image'), authentification.isAuthentificated, userController.updateUserPhoto);

privateRouter.delete('/user/:id', authentification.isAdmin, userController.removeUser);

logger('Private router initialized');
export default privateRouter;