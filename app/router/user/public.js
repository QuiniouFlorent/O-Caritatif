import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { contactusController, registrationController, userController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
import validate from '../../service/validation/validate.js';

const publicRouter = Router();

publicRouter.get('/resetpassword/:token', authentification.isValidToken);

publicRouter.post('/register', validate.createUser, userController.createUser);
publicRouter.post('/login', validate.loginUser, userController.loginUser);
publicRouter.post('/resetpassword', userController.resetPassword);
publicRouter.post('/resetpassword/:token', userController.changePassword);

publicRouter.post('/eventregistration', registrationController.askRegistration);
publicRouter.post('/contactus', contactusController.contactus);

logger('Public router initialized');
export default publicRouter;