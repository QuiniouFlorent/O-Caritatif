import debug from 'debug';
const logger = debug('app:datamapper');

import aboutdataDatamapper from './aboutdataDatamapper.js';
import commentDatamapper from './commentDatamapper.js';
import eventDatamapper from './eventDatamapper.js';
import boardmemberDatamapper from './boardmemberDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import homeDatamapper from './homeDatamapper.js';
import homedataDatamapper from './homedataDatamapper.js';
import itemDatamapper from './itemDatamapper.js';
import itemreservationDatamapper from './itemreservation.js';
import newsDatamapper from './newsDatamapper.js';
import notificationDatamapper from './notificationDatamapper.js';
import opinionDatamapper from './opinionDatamapper.js';
import photoDatamapper from './photoDatamapper.js';
import photoaboutDatamapper from './photoaboutDatamapper.js';
import photohomeDatamapper from './photohomeDatamapper.js';
import registrationDatamapper from './registrationDatamapper.js';
import settingDatamapper from './settingDatamapper.js';
import sponsorDatamapper from './sponsorDatamapper.js';
import userDatamapper from './userDatamapper.js';

logger('main datamapper initialized');

export {aboutdataDatamapper,
        commentDatamapper, 
        eventDatamapper, 
        boardmemberDatamapper,
        galeryDatamapper,
        homeDatamapper,
        homedataDatamapper,
        itemDatamapper,
        itemreservationDatamapper,
        newsDatamapper,
        notificationDatamapper,
        opinionDatamapper,
        photoDatamapper, 
        photoaboutDatamapper,
        photohomeDatamapper,
        registrationDatamapper,
        settingDatamapper,
        sponsorDatamapper, 
        userDatamapper 
};