import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { photoaboutController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const photoaboutRouter = Router();

photoaboutRouter.get('/photoabout', photoaboutController.getAllPhotoabout);
photoaboutRouter.get('/photoabout/:id', photoaboutController.getOnePhotoabout);

photoaboutRouter.post('/photoabout', /*authentification.isAdmin,*/ upload('photoabout').single('image'), photoaboutController.createPhotoabout);

photoaboutRouter.patch('/photoabout/:id',/* authentification.isAdmin, */upload('photoabout').single('image'), photoaboutController.updatePhotoabout);

photoaboutRouter.delete('/photoabout/:id',/* authentification.isAdmin,*/ photoaboutController.removePhotoabout);

export default photoaboutRouter;