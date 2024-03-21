import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const sponsorDatamapper = {
    async findAllSponsor(){
        const query = 'SELECT * FROM "sponsor"';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de sponsor !');
        }
    }
}

logger('Sponsor datamapper initialized');
export default sponsorDatamapper;