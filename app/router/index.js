import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const router = Router();

logger('main router initialized');
export default router;