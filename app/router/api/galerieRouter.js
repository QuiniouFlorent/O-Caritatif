import debug from 'debug';
const logger = debug('app:galerieRouter');

import { Router } from 'express';
const galerieRouter = Router();

logger('galerie router initialized');
export default galerieRouter;