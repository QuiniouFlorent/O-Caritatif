import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { sponsorController } from '../../controller/index.js';
const sponsorRouter = Router();

sponsorRouter.get('/sponsor', sponsorController.getAllSponsor);
sponsorRouter.get('/sponsor/:id', sponsorController.getOneSponsor);

sponsorRouter.post('/sponsor', upload('sponsor').single('image'), sponsorController.createSponsor);

sponsorRouter.patch('/sponsor/:id', sponsorController.updateSponsor);

sponsorRouter.delete('/sponsor/:id', sponsorController.removeSponsor);

export default sponsorRouter;