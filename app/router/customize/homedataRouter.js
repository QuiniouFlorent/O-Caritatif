import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { homedataController } from '../../controller/index.js';
const homedataRouter = Router();

homedataRouter.get('/homedata', homedataController.getHomedata);

homedataRouter.post('/homedata', homedataController.createHomedata);

homedataRouter.patch('/homedata', homedataController.updateHomedata);

homedataRouter.delete('/homedata', homedataController.removeHomedata);

export default homedataRouter;