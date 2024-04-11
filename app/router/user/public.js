import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { contactusController, registrationController, userController } from '../../controller/index.js';
import upload from '../../service/multer/multer-config.js';
import authentification from '../../service/authentification/auth.js';
const publicRouter = Router();

publicRouter.get('/resetpassword/:token', authentification.isValidToken);

publicRouter.post('/register', upload('user').single('image'), userController.createUser);
publicRouter.post('/login', userController.loginUser);
publicRouter.post('/resetpassword', userController.resetPassword);
publicRouter.post('/resetpassword/:token', userController.changePassword);

publicRouter.post('/eventregistration', registrationController.askRegistration);
publicRouter.post('/contactus', contactusController.contactus);

logger('Public router initialized');
export default publicRouter;