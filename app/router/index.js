import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const router = Router();
import apiRouter from './api/index.js';
import userRouter from './user/index.js';
import errorService from '../service/error/index.js';

router.use('/api', apiRouter);
router.use('/login', userRouter);
//404
router.use(errorService._404);
//middleware gestion d'erreurs
router.use(errorService.manageError);

logger('main router initialized');
export default router;