import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const executivememberDatamapper = {

    async findAllExecutivemember() {

        const query = 'SELECT * FROM executivemember';

        return datamapperUtil.executeQuery(query);
    },

    async findOneExecutivemember(id) {

        const query = 'SELECT * FROM executivemember WHERE id =$1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertExecutivemember(newExecutivemember, image) {

        const query = `INSERT INTO executivemember
            (firstname, lastname, role, description, photo_url, since)
            VALUES
            ($1, $2, $3, $4, $5, $6)`;

        const values = [newExecutivemember.firstname, newExecutivemember.lastname, newExecutivemember.role, newExecutivemember.description, image, newExecutivemember.since];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyExecutivemember(executivememberModified, id) {

        const query = `UPDATE executivemember SET
            firstname = $1, 
            lastname = $2, 
            role = $3, 
            description = $4, 
            since = $5,
            updated_at = NOW()
            WHERE id = $6`;

        const values = [executivememberModified.firstname, executivememberModified.lastname, executivememberModified.role, executivememberModified.description, executivememberModified.since, id];
        logger(values);
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyExecutivememberPhoto(id, image) {

        const query = `UPDATE executivemember SET
        photo_url = $1,
        updated_at = NOW()
        WHERE id = $2
        RETURNING photo_url`;

        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteExecutivemember(id) {

        const query = 'DELETE FROM executivemember WHERE id = $1';

        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

export default executivememberDatamapper;