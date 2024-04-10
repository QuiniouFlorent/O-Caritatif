import debug from 'debug';
import datamapperUtil from '../service/util/datamapper.js';
import APIerror from '../service/error/APIerror.js';
import client from '../models/client.js';
import { resetToken } from '../service/mail/resetPassword.js';
const logger = debug('app:datamapper');

const userDatamapper = {
  async findAllUser() {

    const query = 'SELECT * FROM "user"';

    return datamapperUtil.executeQuery(query);
  },

  async findOneUser(id) {

    const query = 'SELECT * FROM "user" WHERE id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },

  async findRegistrationByUser(id) {

    const query = 'SELECT * FROM view_registration WHERE user_id = $1';
    const values = [id];

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
    const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.password, 'utilisateur', image];

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

  async modifyUserPhoto(id, image) {

    const query = `UPDATE "user" SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;
    const values = [image, id];

    return datamapperUtil.executeQuery(query, values);
  },

  async modifyPassword(email) {

    const query = `SELECT * FROM "user" WHERE email = $1`;
    const values = [email];
    let result;
    let error;
    
    try {
        const response = await client.query(query, values);
        result = response.rows;
        if (result.length === 0) {
          error = new APIerror('Email incorrect', 500);
        } else {
          const token = resetToken(result[0].email);
          
        }
    } catch (err) {
        error = new APIerror(err, 500);
    }
    return { result, error }

  },

  //TODO ! PK - FK ??
  async deleteUser(id) {

    const query = 'DELETE FROM "user" WHERE id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },
};

logger('User datamapper initialized');
export default userDatamapper;
