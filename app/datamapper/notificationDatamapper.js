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

        const values = [newNotification.name, newSponsor.link_url, image];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifySponsor(id, sponsorModified) {

        const query = `UPDATE sponsor SET
            name = $1,
            link_url = $2,
            is_active = $3,
            updated_at = NOW()
            WHERE id = $4`;

        const values = [sponsorModified.name, sponsorModified.link_url, sponsorModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifySponsorPhoto(id, image) {
        
        const query = `UPDATE sponsor SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;

        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteSponsor(id) {

        const query = 'DELETE FROM sponsor WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    }
}

export default notificationDatamapper;