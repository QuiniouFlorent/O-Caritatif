import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
const router = Router();

logger('API router initialized');
export default router;