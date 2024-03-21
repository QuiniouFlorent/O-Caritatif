import debug from 'debug';
const logger = debug('app:datamapper');

import eventDatamapper from './eventDatamapper.js';
import galeryDatamapper from './galerieDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
import sponsorDatamapper from './sponsorDatamapper.js';

logger('main datamapper initialized');
export { eventDatamapper, galeryDatamapper, newsDatamapper, sponsorDatamapper };