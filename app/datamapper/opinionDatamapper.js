import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const opinionDatamapper = {
    async findAllOpinion() {
        const query = 'SELECT * FROM opinion';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error('Pas d\'opinion trouvé !');
        }
    },

    async findOneOpinion(id) {
        const query = 'SELECT * FROM opinion WHERE id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas d\'opinion correspondante !')
        }
    },

    async insertOpinion(newOpinion) {
        const query = `INSERT INTO opinion
        (firstname, content, number_star)
        VALUES
        ($1,$2,$3)`
        const values = [newOpinion.firstname, newOpinion.content, newOpinion.number_star];
        try {
            const response = await client.query(query,values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error(`Un truc un peu horrible s'est produit`);
        }
    },

    async modifyOpinion(id, opinionModified) {
        const query = `UPDATE opinion SET
            firstname = $1,
            content = $2,
            number_star = $3,
            updated_at = NOW()
            WHERE id = $4`;
        const values = [opinionModified.firstname, opinionModified.content, opinionModified.number_star, id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier l\'opinion');
        }
    },

    async deleteOpinion(id) {
        const query = 'DELETE FROM opinion WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas d\'opinion à supprimer');
        }
    }
}

logger('Opinion datamapper initialized');
export default opinionDatamapper;