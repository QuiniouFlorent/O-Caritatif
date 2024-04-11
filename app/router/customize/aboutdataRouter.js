import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { aboutdataController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const aboutdataRouter = Router();

aboutdataRouter.get('/aboutdata', aboutdataController.getAllAboutdata);
aboutdataRouter.get('/aboutdata/:id', /*authentification.isAdmin,*/ aboutdataController.getOneAboutdata)

aboutdataRouter.post('/aboutdata', /*authentification.isAdmin,*/ upload('aboutdata').single('image'), aboutdataController.createAboutdata);

aboutdataRouter.patch('/aboutdata/:id', /*authentification.isAdmin,*/ aboutdataController.updateAboutdata);
aboutdataRouter.patch('/aboutdata/:id/position', /*authentification.isAdmin,*/ aboutdataController.updateAboutdataPosition);
aboutdataRouter.patch('/aboutdata/:id/photo', /*authentification.isAdmin,*/ upload('aboutdata').single('image'), aboutdataController.updateAboutdataPhoto);

aboutdataRouter.delete('/aboutdata/:id', /*authentification.isAdmin,*/ aboutdataController.removeAboutdata);

export default aboutdataRouter;