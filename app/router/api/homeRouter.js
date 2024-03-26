import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { homeController } from '../../controller/index.js';
const homeRouter = Router();

homeRouter.get('/home', homeController.getHomeInfos);

logger('Home router initialized');
export default homeRouter;