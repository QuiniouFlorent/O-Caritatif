import debug from 'debug';
const logger = debug('app:datamapper');

import commentDatamapper from './commentDatamapper.js';
import eventDatamapper from './eventDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import homeDatamapper from './homeDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
import opinionDatamapper from './opinionDatamapper.js';
import photoDatamapper from './photoDatamapper.js';
import sponsorDatamapper from './sponsorDatamapper.js';
import userDatamapper from './userDatamapper.js';

logger('main datamapper initialized');

export {commentDatamapper, 
        eventDatamapper, 
        galeryDatamapper,
        homeDatamapper, 
        newsDatamapper,
        opinionDatamapper,
        photoDatamapper, 
        sponsorDatamapper, 
        userDatamapper 
};