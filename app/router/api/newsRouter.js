import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import { newsController } from '../../controller/index.js';
const newsRouter = Router();

newsRouter.get('/news', newsController.getAllNews);
newsRouter.get('/news/:id', newsController.getOneNews);

newsRouter.post('/news', newsController.createNews);

newsRouter.patch('/news/:id', newsController.updateNews);

newsRouter.delete('/news/:id', newsController.removeNews);


logger('news router initialized');
export default newsRouter;