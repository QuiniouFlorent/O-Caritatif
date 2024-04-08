import debug from 'debug';
const logger = debug('app:datamapper');

import aboutdataDatamapper from './aboutdataDatamapper.js';
import commentDatamapper from './commentDatamapper.js';
import eventDatamapper from './eventDatamapper.js';
import boardmemberDatamapper from './boardmemberDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import homeDatamapper from './homeDatamapper.js';
import homedataDatamapper from './homedataDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
import opinionDatamapper from './opinionDatamapper.js';
import photoDatamapper from './photoDatamapper.js';
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
        newsDatamapper,
        opinionDatamapper,
        photoDatamapper, 
        photohomeDatamapper,
        registrationDatamapper,
        settingDatamapper,
        sponsorDatamapper, 
        userDatamapper 
};