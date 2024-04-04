import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const customizeRouter = Router();

import homedataRouter from './homedataRouter.js';
import executivememberRouter from './executivememberRouter.js';

customizeRouter.use(homedataRouter);
customizeRouter.use(executivememberRouter);

logger('User Router initialized');
export default customizeRouter;