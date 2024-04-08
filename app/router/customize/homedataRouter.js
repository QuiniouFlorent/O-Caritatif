import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { homedataController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const homedataRouter = Router();

homedataRouter.get('/homedata', homedataController.getHomedata);

homedataRouter.post('/homedata', authentification.isAdmin, homedataController.createHomedata);

homedataRouter.patch('/homedata', authentification.isAdmin, homedataController.updateHomedata);

homedataRouter.delete('/homedata', authentification.isAdmin, homedataController.removeHomedata);

export default homedataRouter;