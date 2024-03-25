import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const userRouter = Router();

import privateRouter from './private.js';
import publicRouter from './public.js';

userRouter.use(publicRouter);
userRouter.use(privateRouter);

logger('User Router initialized');
export default userRouter;