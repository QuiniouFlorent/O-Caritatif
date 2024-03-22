import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const userRouter = Router();

import privateRouter from './private.js';

userRouter.use(privateRouter);

logger('User Router initialized');
export default userRouter;