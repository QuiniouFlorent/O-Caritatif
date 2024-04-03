import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { homedataController } from '../../controller/index.js';
const homedataRouter = Router();

homedataRouter.get('/homedata', homedataController.getHomedata);

homedataRouter.post('/homedata', upload('homedata').single('image'), homedataController.createHomedata);

homedataRouter.patch('/homedata', homedataController.updateHomedata);
homedataRouter.patch('/homedata/logo', upload('homedata').single('image'), homedataController.updateHomedataLogo);

homedataRouter.delete('/homedata', homedataController.removeHomedata);

export default homedataRouter;