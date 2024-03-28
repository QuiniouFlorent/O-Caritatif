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

    async insertUser(newUser) {
        const query = `INSERT INTO "user"
        (lastname, firstname, email, password, role, photo_url)
        VALUES
        ($1,$2,$3,$4,$5,$6)`;
        const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.password, "utilisateur", newUser.photo_url];
        try { 
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error(`Impossible de créer un compte utilisateur`)
        }
    },

    async modifyUser(id, userModified) {
        const query = `UPDATE "user" SET
            lastname = $1,
            firstname = $2,
            email = $3,
            role = $4,
            photo_url = $5,
            is_active = $6
            updated_at = NOW()
            WHERE id = $7 `;
        const values = [userModified.lastname, userModified.firstname, userModified.email, userModified.role, userModified.photo_url, userModified.is_active, id];
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