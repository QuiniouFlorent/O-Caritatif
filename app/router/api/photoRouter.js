import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { photoController } from '../../controller/index.js';
const photoRouter = Router();

photoRouter.get('/photo', photoController.getAllPhoto);
photoRouter.get('/photo/:id', photoController.getOnePhoto);

photoRouter.post('/photo', photoController.createPhoto);

photoRouter.patch('/photo/:id', photoController.updatePhoto);

photoRouter.delete('/photo/:id', photoController.removePhoto);


logger('Photo router initialized');
export default photoRouter;