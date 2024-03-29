import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { opinionController } from '../../controller/index.js';
const opinionRouter = Router();

opinionRouter.get('/opinion', opinionController.getAllOpinion);
opinionRouter.get('/opinion/:id', opinionController.getOneOpinion);

opinionRouter.post('/opinion', opinionController.createOpinion);

opinionRouter.patch('/opinion/:id', opinionController.updateOpinion);

opinionRouter.delete('/opinion/:id', opinionController.removeOpinion);

export default opinionRouter;