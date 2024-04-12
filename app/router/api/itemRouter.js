import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { itemController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const itemRouter = Router();

itemRouter.get('/item', itemController.getAllItem);
itemRouter.get('/item/:id', itemController.getOneItem);

itemRouter.post('/item', /*authentification.isResponsableOrAdmin, */upload('item').single('image'), itemController.createItem);

itemRouter.patch('/item/:id', /*authentification.isAuthentificated, */itemController.updateItem);
itemRouter.patch('/item/:id/photo', /*authentification.isResponsableOrAdmin,*/ upload('item').single('image'), itemController.updateItemPhoto);

itemRouter.delete('/item/:id', /*authentification.isResponsableOrAdmin,*/ itemController.removeItem);

export default itemRouter;