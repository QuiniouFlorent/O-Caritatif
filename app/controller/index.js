import debug from 'debug';
const logger = debug('app:controller');

import aboutdataController from './aboutdataController.js';
import commentController from './commentController.js';
import eventController from './eventController.js';
import boardmemberController from './boardmemberController.js';
import galerieController from './galerieController.js';
import homeController from './homeController.js';
import homedataController from './homedataController.js';
import newsController from './newsController.js';
import opinionController from './opinionController.js';
import photoController from './photoController.js';
import photohomeController from './photohomeController.js';
import registrationController from './registrationController.js';
import settingController from './settingController.js';
import sponsorController from './sponsorController.js';
import userController from './userController.js';

logger('Main controller initialized');

export {aboutdataController,
        commentController, 
        eventController, 
        boardmemberController,
        galerieController, 
        homeController,
        homedataController, 
        newsController,
        opinionController,
        photoController, 
        photohomeController,
        registrationController,
        settingController,
        sponsorController, 
        userController 
};