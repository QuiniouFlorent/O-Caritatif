import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { notificationController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const notificationRouter = Router();

notificationRouter.get('/notification', notificationController.getAllNotification);
notificationRouter.get('/notification/:id', notificationController.getOneNotification);

notificationRouter.post('/notification', notificationController.createNotification);

notificationRouter.patch('/notification/:id', authentification.isResponsableOrAdmin, notificationController.updateNotification);

notificationRouter.delete('/notification/:id', authentification.isAuthentificated, notificationController.removeNotification);

export default notificationRouter;