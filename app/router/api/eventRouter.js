import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { eventController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const eventRouter = Router();

eventRouter.get('/event', eventController.getAllEvent);
eventRouter.get('/event/:id', eventController.getOneEvent);

eventRouter.post('/event', authentification.isResponsableOrAdmin, upload('event').single('image'), eventController.createEvent);

eventRouter.patch('/event/:id', authentification.isResponsableOrAdmin, eventController.updateEvent);
eventRouter.patch('/event/:id/photo', authentification.isResponsableOrAdmin, upload('event').single('image'), eventController.updateEventPhoto);

eventRouter.delete('/event/:id', authentification.isResponsableOrAdmin, eventController.removeEvent);

export default eventRouter;