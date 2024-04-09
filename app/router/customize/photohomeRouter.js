import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
import upload from '../../service/multer/multer-config.js';
import { photohomeController } from '../../controller/index.js';
import authentification from '../../service/authentification/auth.js';

const photohomeRouter = Router();

photohomeRouter.get('/photohome', photohomeController.getAllPhotohome);
photohomeRouter.get('/photohome/:id', photohomeController.getOnePhotohome);

photohomeRouter.post('/photohome', authentification.isAdmin, upload('photohome').single('image'), photohomeController.createPhotohome);

photohomeRouter.patch('/photohome/:id', authentification.isAdmin, photohomeController.updatePhotohome);
photohomeRouter.patch('/photohome/:id/photo', authentification.isAdmin, upload('photohome').single('image'), photohomeController.updatePhotohomePhoto);

photohomeRouter.delete('/photohome/:id', authentification.isAdmin, photohomeController.removePhotohome);

export default photohomeRouter;