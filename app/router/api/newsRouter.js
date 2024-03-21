import debug from 'debug';
const logger = debug('app:newsRouter')

import { Router } from 'express';
const newsRouter = Router();

logger('news router initialized');
export default newsRouter;