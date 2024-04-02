import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { newsController } from '../../controller/index.js';
const newsRouter = Router();

newsRouter.get('/news', newsController.getAllNews);
newsRouter.get('/news/:id', newsController.getOneNews);

newsRouter.post('/news', upload('news').single('image'), newsController.createNews);

newsRouter.patch('/news/:id', newsController.updateNews);
newsRouter.patch('/news/:id/photo', upload('news').single('image'), newsController.updateNewsPhoto);

newsRouter.delete('/news/:id', newsController.removeNews);

export default newsRouter;