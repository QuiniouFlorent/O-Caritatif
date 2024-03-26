import debug from 'debug';
const logger = debug('app:controller');

import commentController from './commentController.js';
import eventController from './eventController.js';
import galerieController from './galerieController.js';
import homeController from './homeController.js';
import newsController from './newsController.js';
import photoController from './photoController.js';
import sponsorController from './sponsorController.js';
import userController from './userController.js';

logger('Main controller initialized');

export {commentController, 
        eventController, 
        galerieController, 
        homeController, 
        newsController, 
        photoController, 
        sponsorController, 
        userController 
};