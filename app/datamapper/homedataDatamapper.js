import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const homedataDatamapper = {

    async findHomedata() {

        const query = 'SELECT * FROM homedata';

        return datamapperUtil.executeQuery(query);
    },

    async modifyHomedata(homedataModified) {

        const query = `UPDATE sponsor SET
            association_name = $1,
            image_header_url = $2,
            
            is_active = $3,
            updated_at = NOW()
            WHERE id = 1`;
        const values = [homedataModified.name, homedataModified.link_url, homedataModified.is_active];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteHomedata() {

        const query = 'DELETE FROM homedata WHERE id = 1';
        
        return datamapperUtil.executeQuery(query);
    }
}

export default homedataDatamapper;