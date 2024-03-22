import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const userDatamapper = {
    async findAllUser() {
        const query = 'SELECT * FROM "user"';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error('Pas d\'utilisateur trouvé !');
        }
    }
}

logger('User datamapper initialized');
export default userDatamapper;