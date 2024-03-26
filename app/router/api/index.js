import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const apiRouter = Router();

import eventRouter from './eventRouter.js';
import galerieRouter from './galerieRouter.js';
import newsRouter from './newsRouter.js';
import photoRouter from './photoRouter.js';
import sponsorRouter from './sponsorRouter.js';

apiRouter.use(eventRouter);
apiRouter.use(galerieRouter);
apiRouter.use(newsRouter);
apiRouter.use(photoRouter);
apiRouter.use(sponsorRouter);

logger('API router initialized');
export default apiRouter;