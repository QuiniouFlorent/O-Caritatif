import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';
import APIerror from '../service/error/APIerror.js';

const registrationDatamapper= {

    async findAllregistration() {

        const query = 'SELECT * FROM registration';

        return datamapperUtil.executeQuery(query);
    },
   
    async insertRegistration(newRegistration) {

        const sql = `SELECT * FROM registration WHERE user_id = ${newRegistration.user_id} AND event_id = ${newRegistration.event_id}`;
        const verification = await datamapperUtil.executeQuery(sql);

        if (verification.result.length > 0) {
            let error = new APIerror('Vous ne pouvez pas vous inscrire deux fois au même événement', 500);
            return {error};

        } else {
            const query = `INSERT INTO registration
            (user_id, event_id)
            VALUES
            ($1,$2)`;

            const values = [newRegistration.user_id, newRegistration.event_id];

            return datamapperUtil.executeQuery(query, values);
        }
    },

    async modifyRegistration(id, registrationModified) {

        const query = `UPDATE registration SET
            event_id = $1,
            updated_at = NOW()
            WHERE id = $2`;

        const values = [registrationModified.event_id, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteRegistration(id) {
        
        const query = 'DELETE FROM registration WHERE id = $1';

        const values = [id];
        
        return datamapperUtil.executeDeleteQuery(query, values);
    }
};

export default registrationDatamapper;