import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { galerieController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const galerieRouter = Router();

galerieRouter.get('/galerie', galerieController.getAllGalerie);
galerieRouter.get('/galerie/:id', galerieController.getOneGalerie);

galerieRouter.post('/galerie', authentification.isResponsableOrAdmin, galerieController.createGalerie);

galerieRouter.patch('/galerie/:id', authentification.isResponsableOrAdmin, galerieController.updateGalerie);

galerieRouter.delete('/galerie/:id', authentification.isResponsableOrAdmin, galerieController.removeGalerie);

export default galerieRouter;