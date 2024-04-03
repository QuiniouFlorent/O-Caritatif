import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const homeDatamapper = {
    
    async findLastNews(){
        const query = 'SELECT * FROM view_last_news';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de news récentes !');
        }
    },

    async findNextEvent(){
        const query = 'SELECT * FROM view_next_event';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas d\'événement à venir !');
        }
    }

}

logger('Home datamapper initialized');
export default homeDatamapper;