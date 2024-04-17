import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const userRouter = Router();

import privateRouter from './private.js';
import publicRouter from './public.js';
import authentification from '../../service/authentification/auth.js';


userRouter.use(publicRouter);
userRouter.use(authentification.isAuthentificated, privateRouter);

logger('User Router initialized');
export default userRouter;