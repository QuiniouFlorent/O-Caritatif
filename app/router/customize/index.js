import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const customizeRouter = Router();

import homedataRouter from './homedataRouter.js';

customizeRouter.use(homedataRouter);

logger('User Router initialized');
export default customizeRouter;