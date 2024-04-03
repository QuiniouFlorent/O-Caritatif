import debug from 'debug';
const logger = debug('app:datamapper');

import commentDatamapper from './commentDatamapper.js';
import eventDatamapper from './eventDatamapper.js';
import executivememberDatamapper from './executivememberDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import homeDatamapper from './homeDatamapper.js';
import homedataDatamapper from './homedataDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
import opinionDatamapper from './opinionDatamapper.js';
import photoDatamapper from './photoDatamapper.js';
import sponsorDatamapper from './sponsorDatamapper.js';
import userDatamapper from './userDatamapper.js';

logger('main datamapper initialized');

export {commentDatamapper, 
        eventDatamapper, 
        executivememberDatamapper,
        galeryDatamapper,
        homeDatamapper,
        homedataDatamapper, 
        newsDatamapper,
        opinionDatamapper,
        photoDatamapper, 
        sponsorDatamapper, 
        userDatamapper 
};