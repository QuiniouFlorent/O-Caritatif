import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const newsDatamapper = {
    async findAllNews() {
        const query = 'SELECT * FROM view_all_news';
        try {
            const response = await client.query(query); 
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error('Pas de news !');
        }
    }
};

logger('News datamapper initialized');
export default newsDatamapper;