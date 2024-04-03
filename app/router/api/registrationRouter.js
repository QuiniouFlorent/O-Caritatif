import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { registrationController } from '../../controller/index.js';
const registrationtRouter = Router();

registrationtRouter.get('/registration', registrationController.getAllRegistration);

registrationtRouter.post('/registration', registrationController.createRegistration);

registrationtRouter.patch('/registration/:id', registrationController.updateRegistration);

registrationtRouter.delete('/registration/:id', registrationController.removeRegistration);

export default registrationtRouter;