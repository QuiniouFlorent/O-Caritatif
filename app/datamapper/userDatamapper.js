import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const userDatamapper = {

    async findAllUser() {

        const query = 'SELECT * FROM "user"';
        
        return datamapperUtil.executeQuery(query);
    },

    async findOneUser(id) {

        const query = 'SELECT * FROM "user" WHERE id = $1';
        const values = [id]
        
        return datamapperUtil.executeQuery(query, values);
    },

    async findUser(user) {

        const query = 'SELECT * FROM "user" WHERE email = $1';
        const values = [user.email];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertUser(newUser, image) {

        const query = `INSERT INTO "user"
        (lastname, firstname, email, password, role, photo_url)
        VALUES
        ($1,$2,$3,$4,$5,$6)`;
        const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.password, "utilisateur", image];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyUser(id, userModified) {

        const query = `UPDATE "user" SET
            lastname = $1,
            firstname = $2,
            email = $3,
            role = $4,
            photo_url = $5,
            is_active = $6,
            updated_at = NOW()
            WHERE id = $7 `;
        const values = [userModified.lastname, userModified.firstname, userModified.email, userModified.role, userModified.photo_url, userModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },
//TODO ! PK - FK ??
    async deleteUser(id) {
        
        const query = 'DELETE FROM "user" WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

logger('User datamapper initialized');
export default userDatamapper;