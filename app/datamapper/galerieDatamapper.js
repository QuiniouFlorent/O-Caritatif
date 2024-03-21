import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const galeryDatamapper= {
    async findAllGalery() {
        const query = 'SELECT * FROM "galery"';
        try { 
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galerie !');
        }
    }
};

logger('Galerie datamapper initialized');
export default galeryDatamapper;