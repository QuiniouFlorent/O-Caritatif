import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import multer from '../../service/multer/multer-config.js';
import { eventController } from '../../controller/index.js';
const eventRouter = Router();

eventRouter.get('/event', eventController.getAllEvent);
eventRouter.get('/event/:id', eventController.getOneEvent);

eventRouter.post('/event', multer, eventController.createEvent);

eventRouter.patch('/event/:id', eventController.updateEvent);

eventRouter.delete('/event/:id', eventController.removeEvent);

logger('event router initialized');
export default eventRouter;