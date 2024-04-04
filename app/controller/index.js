import debug from 'debug';
const logger = debug('app:controller');

import aboutdataController from './aboutdataController.js';
import commentController from './commentController.js';
import eventController from './eventController.js';
import executivememberController from './executivememberController.js';
import galerieController from './galerieController.js';
import homeController from './homeController.js';
import homedataController from './homedataController.js';
import newsController from './newsController.js';
import opinionController from './opinionController.js';
import photoController from './photoController.js';
import registrationController from './registrationController.js';
import sponsorController from './sponsorController.js';
import userController from './userController.js';

logger('Main controller initialized');

export {aboutdataController,
        commentController, 
        eventController, 
        executivememberController,
        galerieController, 
        homeController,
        homedataController, 
        newsController,
        opinionController,
        photoController, 
        registrationController,
        sponsorController, 
        userController 
};