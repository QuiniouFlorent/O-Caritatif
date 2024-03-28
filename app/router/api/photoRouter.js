import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { photoController } from '../../controller/index.js';
const photoRouter = Router();

photoRouter.get('/photo', photoController.getAllPhoto);
photoRouter.get('/photo/:id', photoController.getOnePhoto);

photoRouter.post('/photo', upload('photo').single('image'), photoController.createPhoto);

photoRouter.patch('/photo/:id', photoController.updatePhoto);

photoRouter.delete('/photo/:id', photoController.removePhoto);


logger('Photo router initialized');
export default photoRouter; 
