import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import { opinionController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';
const opinionRouter = Router();

opinionRouter.get('/opinion', opinionController.getAllOpinion);
opinionRouter.get('/opinion/:id', opinionController.getOneOpinion);

opinionRouter.post('/opinion', authentification.isAdmin, opinionController.createOpinion);

opinionRouter.patch('/opinion/:id', authentification.isAdmin, opinionController.updateOpinion);

opinionRouter.delete('/opinion/:id', authentification.isAdmin, opinionController.removeOpinion);

export default opinionRouter;