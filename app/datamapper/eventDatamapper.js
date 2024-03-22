import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const eventDatamapper = {
    async findAllEvent() {
        const query = 'SELECT * FROM view_all_events';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error('Pas d\'événement trouvé !');
        }
    }
}

logger('Event datamapper initialized');
export default eventDatamapper;