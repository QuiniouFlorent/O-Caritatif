import debug from 'debug';
const logger = debug('app:datamapper');

import eventDatamapper from './eventDatamapper.js';
//import galerieDatamapper from './eventDatamapper.js';
import newsDatamapper from './newsDatamapper.js';
//import sponsorDatamapper from './eventDatamapper.js';

logger('main datamapper initialized');
export { eventDatamapper, /*galerieDatamapper,*/ newsDatamapper/*, sponsorDatamapper*/ };