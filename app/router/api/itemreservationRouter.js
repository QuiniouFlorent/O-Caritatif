import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { itemreservationController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const itemreservationRouter = Router();

itemreservationRouter.get('/itemreservation', authentification.isAuthentificated, itemreservationController.getAllItemreservation);
itemreservationRouter.get('/itemreservation/:id', authentification.isAuthentificated, itemreservationController.getOneItemReservation);

itemreservationRouter.post('/itemreservation', authentification.isAuthentificated, itemreservationController.createItemreservation);

itemreservationRouter.patch('/itemreservation/:id', authentification.isAuthentificated, itemreservationController.updateItemreservation);

itemreservationRouter.delete('/itemreservation/:id', authentification.isAdmin, itemreservationController.removeItemreservation);

export default itemreservationRouter;