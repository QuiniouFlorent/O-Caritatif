import debug from 'debug';
const logger = debug('app:router');

import { Router } from 'express';
const galerieRouter = Router();

logger('galerie router initialized');
export default galerieRouter;