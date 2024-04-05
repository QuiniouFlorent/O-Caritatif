import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const customizeRouter = Router();

import aboutdataRouter from './aboutdataRouter.js';
import homedataRouter from './homedataRouter.js';
import boardmemberRouter from './boardmemberRouter.js';

customizeRouter.use(aboutdataRouter);
customizeRouter.use(homedataRouter);
customizeRouter.use(boardmemberRouter);

logger('User Router initialized');
export default customizeRouter;