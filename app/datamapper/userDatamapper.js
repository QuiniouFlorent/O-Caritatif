import debug from 'debug';
const logger = debug('app:datamapper');
import 'dotenv/config';
import datamapperUtil from '../service/util/datamapper.js';

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

  async findNotificationByUser(id) {

    const query = 'SELECT * FROM notification WHERE user_id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },

  async findItemreservationByUser(id) {

    const query = 'SELECT * FROM itemreservation WHERE user_id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },

  async findUser(mail) {

    const query = 'SELECT * FROM "user" WHERE email = $1';
    const values = [mail];

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

  async rebootPassword(email, token) {
      
    const query = `INSERT INTO resetpassword 
      (user_email, token) 
      VALUES
      ($1, $2)`;
    const values = [email, token];
         
    return datamapperUtil.executeQuery(query, values);
  },

  async findResetPassword(email) {

    const query = `SELECT * FROM resetpassword WHERE user_email = $1 ORDER BY id DESC LIMIT 1`;
    const values = [email];

    return datamapperUtil.executeQuery(query, values);
  },

  async modifyPassword(email, hashed) {

    const query = `UPDATE "user" SET password = $1, 
      updated_at = NOW() 
      WHERE email = $2`;
    const values = [hashed, email];

    return datamapperUtil.executeQuery(query, values);
  },

  async deleteResetPassword(email) {

    const query = `DELETE FROM resetpassword WHERE user_email = $1`
    const values = [email];

    return datamapperUtil.executeDeleteQuery(query, values);
  },

/*
  async deleteUser(id) {

    const query = 'DELETE FROM "user" WHERE id = $1';
    const values = [id];

    return datamapperUtil.executeDeleteQuery(query, values);
  },*/
};

logger('User datamapper initialized');
export default userDatamapper;
