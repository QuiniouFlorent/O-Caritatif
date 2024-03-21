import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { galerieController } from '../../controller/index.js';
const galerieRouter = Router();

galerieRouter.get('/galerie', galerieController.getAllGalerie);

logger('galerie router initialized');
export default galerieRouter;