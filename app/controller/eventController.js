import debug from 'debug';
const logger = debug('app:controller');
import { eventDatamapper } from '../datamapper/index.js';

const eventController = {
    async getAllEvent(req,res) {
        logger('event getAll controller called');
        const events = await eventDatamapper.findAllEvent();
        res.json(events);
    }
}

logger('Event controller initialized');
export default eventController;