import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import { sponsorController } from '../../controller/index.js';
const sponsorRouter = Router();

sponsorRouter.get('/sponsor', sponsorController.getAllSponsor);
sponsorRouter.get('/sponsor/:id', sponsorController.getOneSponsor);

sponsorRouter.post('/sponsor', sponsorController.createSponsor);

sponsorRouter.patch('/sponsor/:id', sponsorController.updateSponsor);

sponsorRouter.delete('/sponsor/:id', sponsorController.removeSponsor);

logger('sponsor router initialized');
export default sponsorRouter;