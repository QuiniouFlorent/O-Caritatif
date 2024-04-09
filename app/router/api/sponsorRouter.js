import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { sponsorController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const sponsorRouter = Router();

sponsorRouter.get('/sponsor', sponsorController.getAllSponsor);
sponsorRouter.get('/sponsor/:id', sponsorController.getOneSponsor);

sponsorRouter.post('/sponsor', authentification.isResponsableOrAdmin, upload('sponsor').single('image'), sponsorController.createSponsor);

sponsorRouter.patch('/sponsor/:id', authentification.isResponsableOrAdmin, sponsorController.updateSponsor);
sponsorRouter.patch('/sponsor/:id/photo', authentification.isResponsableOrAdmin, upload('sponsor').single('image'), sponsorController.updateSponsorPhoto);

sponsorRouter.delete('/sponsor/:id', authentification.isResponsableOrAdmin, sponsorController.removeSponsor);

export default sponsorRouter;