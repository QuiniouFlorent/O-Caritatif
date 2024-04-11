import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { registrationController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const registrationtRouter = Router();

registrationtRouter.get('/registration', authentification.isResponsableOrAdmin, registrationController.getAllRegistration);

registrationtRouter.post('/registration', authentification.isAuthentificated, registrationController.createRegistration);

registrationtRouter.patch('/registration/:id', authentification.isResponsableOrAdmin, registrationController.updateRegistration);

registrationtRouter.delete('/registration/:id', authentification.isAuthentificated, registrationController.removeRegistration);

export default registrationtRouter;