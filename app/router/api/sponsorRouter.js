import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import { sponsorController } from '../../controller/index.js';
const sponsorRouter = Router();

sponsorRouter.get('/sponsor', sponsorController.getAllSponsor);

logger('sponsor router initialized');
export default sponsorRouter;