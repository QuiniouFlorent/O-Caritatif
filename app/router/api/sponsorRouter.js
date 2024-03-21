import debug from 'debug';
const logger = debug('app:router')

import { Router } from 'express';
const sponsorRouter = Router();

logger('sponsor router initialized');
export default sponsorRouter;