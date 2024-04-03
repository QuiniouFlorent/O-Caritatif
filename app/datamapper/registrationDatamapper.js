import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const registrationDatamapper= {

    async findAllregistration() {

        const query = 'SELECT * FROM registration';

        return datamapperUtil.executeQuery(query);
    },
   
    async insertRegistration(newRegistration) {

        const query = `INSERT INTO registration
            (user_id, event_id)
            VALUES
            ($1,$2)`;

        const values = [newRegistration.user_id, newRegistration.event_id];

        return datamapperUtil.executeQuery(query, values);
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
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default registrationDatamapper;