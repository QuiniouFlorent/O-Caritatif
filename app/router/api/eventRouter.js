import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { eventController } from '../../controller/index.js';
const eventRouter = Router();

eventRouter.get('/event', eventController.getAllEvent);

logger('event router initialized');
export default eventRouter;