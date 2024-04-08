import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { photoController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const photoRouter = Router();

photoRouter.get('/photo', photoController.getAllPhoto);
photoRouter.get('/photo/:id', photoController.getOnePhoto);

photoRouter.post('/photo', authentification.isResponsableOrAdmin, upload('photo').single('image'), photoController.createPhoto);

photoRouter.patch('/photo/:id', authentification.isResponsableOrAdmin, photoController.updatePhoto);
photoRouter.patch('/photo/:id/photo', authentification.isResponsableOrAdmin, upload('photo').single('image'), photoController.updatePhotoPhoto);

photoRouter.delete('/photo/:id', authentification.isResponsableOrAdmin, photoController.removePhoto);

export default photoRouter; 
