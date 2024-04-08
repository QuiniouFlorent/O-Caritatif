import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { newsController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const newsRouter = Router();

newsRouter.get('/news', newsController.getAllNews);
newsRouter.get('/news/:id', newsController.getOneNews);

newsRouter.post('/news', authentification.isResponsableOrAdmin, upload('news').single('image'), newsController.createNews);

newsRouter.patch('/news/:id', authentification.isResponsableOrAdmin, newsController.updateNews);
newsRouter.patch('/news/:id/photo', authentification.isResponsableOrAdmin, upload('news').single('image'), newsController.updateNewsPhoto);

newsRouter.delete('/news/:id', authentification.isResponsableOrAdmin, newsController.removeNews);

export default newsRouter;