import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { aboutdataController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const aboutdataRouter = Router();

aboutdataRouter.get('/aboutdata', aboutdataController.getAboutdata);

aboutdataRouter.post('/aboutdata', authentification.isAdmin, aboutdataController.createAboutdata);

aboutdataRouter.patch('/aboutdata', authentification.isAdmin, aboutdataController.updateAboutdata);

aboutdataRouter.delete('/aboutdata', authentification.isAdmin, aboutdataController.removeAboutdata);

export default aboutdataRouter;