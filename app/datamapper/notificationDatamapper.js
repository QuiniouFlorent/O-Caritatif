import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const notificationDatamapper = {

    async findAllNotification(){

        const query = 'SELECT * FROM notification';

        return datamapperUtil.executeQuery(query);
    },

    async findOneNotification(id) {

        const query = 'SELECT * FROM notification WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertNotification(newNotification) {

        const query = `INSERT INTO notification
        (user_id, message)
        VALUES
        ($1,$2)`;

        const values = [newNotification.user_id, newNotification.message];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyNotification(id, notificationModified) {

        const query = `UPDATE notification SET
            user_id = $1,
            message = $2,
            updated_at = NOW()
            WHERE id = $3`;

        const values = [notificationModified.user_id, notificationModified.message, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteNotification(id) {

        const query = 'DELETE FROM notification WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    }
}

export default notificationDatamapper;