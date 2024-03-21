import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import { newsController } from '../../controller/index.js';
const newsRouter = Router();

newsRouter.get('/news', newsController.getAllNews);

logger('news router initialized');
export default newsRouter;