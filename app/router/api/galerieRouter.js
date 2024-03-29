import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { galerieController } from '../../controller/index.js';
const galerieRouter = Router();

galerieRouter.get('/galerie', galerieController.getAllGalerie);
galerieRouter.get('/galerie/:id', galerieController.getOneGalerie);

galerieRouter.post('/galerie', galerieController.createGalerie);

galerieRouter.patch('/galerie/:id', galerieController.updateGalerie);

galerieRouter.delete('/galerie/:id', galerieController.removeGalerie);

export default galerieRouter;