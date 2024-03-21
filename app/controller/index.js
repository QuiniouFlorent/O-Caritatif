import debug from 'debug';
const logger = debug('app:controller');

import eventController from './eventController.js';
import galerieController from './galerieController.js';
import newsController from './newsController.js';
import sponsorController from './sponsorController.js';

logger('Main controller initialized');
export { eventController, galerieController, newsController, sponsorController };