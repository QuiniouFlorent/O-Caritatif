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
    },

    async findOneUser(id) {
        const query = 'SELECT * FROM "user" WHERE id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas d\'utilisateur correspondant !')
        }
    },

    async modifyUser(id, userModified) {
        const query = `UPDATE "user" SET
            lastname = $1,
            firstname = $2,
            email = $3,
            role = $4,
            photo_url = $5,
            updated_at = NOW()
            WHERE id = $6 `;
        const values = [userModified.lastname, userModified.firstname, userModified.email, userModified.role, userModified.photo_url, id];
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('impossible de modifier l\'utilisateur');
        }
    },
//TODO ! PK - FK ??
    async deleteUser(id) {
        const query = 'DELETE FROM "user" WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query, values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas d\'utlisateur à supprimer');
        }
    }
}

logger('User datamapper initialized');
export default userDatamapper;