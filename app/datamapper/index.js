import debug from 'debug';
const logger = debug('app:datamapper');

import eventDatamapper from './eventDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
import photoDatamapper from './photoDatamapper.js';
import sponsorDatamapper from './sponsorDatamapper.js';
import userDatamapper from './userDatamapper.js';

logger('main datamapper initialized');
export { eventDatamapper, galeryDatamapper, newsDatamapper, photoDatamapper, sponsorDatamapper, userDatamapper };