import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const router = Router();
import apiRouter from './api/index.js';
import userRouter from './user/index.js';

router.use('/api', apiRouter);
router.use('/login', userRouter);

logger('main router initialized');
export default router;