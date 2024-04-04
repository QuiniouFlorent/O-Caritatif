import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { aboutdataController } from '../../controller/index.js';
const aboutdataRouter = Router();

aboutdataRouter.get('/aboutdata', aboutdataController.getAboutdata);

aboutdataRouter.post('/aboutdata', aboutdataController.createAboutdata);

aboutdataRouter.patch('/aboutdata', aboutdataController.updateAboutdata);

aboutdataRouter.delete('/aboutdata', aboutdataController.removeAboutdata);

export default aboutdataRouter;