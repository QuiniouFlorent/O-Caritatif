import debug from 'debug';
const logger = debug('app:controller');
import { eventDatamapper } from '../datamapper/index.js';

const eventController = {
    async getAllEvent(req,res) {
        logger('Event getAll controller called');
        const events = await eventDatamapper.findAllEvent();
        res.json(events);
    },

    async getOneEvent(req,res) {
        logger('Event getOne controller called');
        const id = req.params.id;
        const event = await eventDatamapper.findOneEvent(id);
        res.json(event);
    },

    async createEvent(req, res) {
        logger('Event create controller called');
        const newEvent = req.body;
        const image = req.file.path;
        const event = await eventDatamapper.insertEvent(newEvent, image)
        res.json(event);
    },

    async updateEvent(req, res) {
        logger('Event modify controller called');
        const id = req.params.id;
        const eventModified = req.body;
        const event = await eventDatamapper.modifyEvent(id, eventModified);
        res.json(event);
    },

    async removeEvent(req,res) {
        const id = req.params.id;
        const event = await eventDatamapper.deleteEvent(id);
        res.json(event);
    }
}

logger('Event controller initialized');
export default eventController;