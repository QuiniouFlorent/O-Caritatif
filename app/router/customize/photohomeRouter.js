import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { photohomeController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const photohomeRouter = Router();

photohomeRouter.get('/aboutdata', photohomeController.getPhotohome);

photohomeRouter.post('/aboutdata', authentification.isAdmin, upload('photohome').array('image'), photohomeController.createPhotohome);

photohomeRouter.patch('/aboutdata', authentification.isAdmin, upload('photohome').array('image'), photohomeController.updatePhotohome);

photohomeRouter.delete('/aboutdata', authentification.isAdmin, photohomeController.removePhotohome);

export default photohomeRouter;