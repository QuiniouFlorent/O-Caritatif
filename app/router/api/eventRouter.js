import debug from 'debug';
const logger = debug('app:eventRouter');

import { Router } from 'express';
const eventRouter = Router();

logger('event router initialized');
export default eventRouter;