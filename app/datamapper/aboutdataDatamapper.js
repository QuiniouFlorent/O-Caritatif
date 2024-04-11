import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const aboutdataDatamapper = {

    async findAllAboutdata() {

        const query = 'SELECT * FROM aboutdata';

        return datamapperUtil.executeQuery(query);
    },

    async findOneAboutdata(id) {

        const query = 'SELECT * FROM aboutdata WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertAboutdata(newAboutdata, image) {

        const query = `INSERT INTO aboutdata
            (paragraph_title, paragraph_content, paragraph_photo_url)
            VALUES
            ($1, $2, $3)`;

        const values = [newAboutdata.paragraph_title, newAboutdata.paragraph_content, image];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyAboutdata(id, aboutdataModified) {

        const query = `UPDATE aboutdata SET
            paragraph_title = $1,
            paragraph_content = $2,
            updated_at = NOW()
            WHERE id = $3`;

        const values = [aboutdataModified.paragraph_title, aboutdataModified.paragraph_content, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyAboutdataPhoto(id, image) {

        const query = `UPDATE aboutdata SET
            paragraph_photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;

        const values = [image, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteAboutdata(id) {

        const query = 'DELETE FROM aboutdata WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

export default aboutdataDatamapper;