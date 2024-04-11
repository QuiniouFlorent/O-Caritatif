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
            (title, content, photo_url, position)
            VALUES
            ($1, $2, $3, $4)`;

        const values = [newAboutdata.title, newAboutdata.content, image, newAboutdata.position];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyAboutdata(id, aboutdataModified) {

        const query = `UPDATE aboutdata SET
            title = $1,
            content = $2,
            position = $3
            updated_at = NOW()
            WHERE id = $4`;

        const values = [aboutdataModified.title, aboutdataModified.content, aboutdataModified.position, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyAboutdataPosition(aboutdataPositionModified) {

        const promises = aboutdataPositionModified.map(aboutdata => {

            const query = `UPDATE aboutdata SET
            position = $1
            WHERE id = $2`;
            const values = [aboutdata.position, aboutdata.id];

            return datamapperUtil.executeQuery(query, values);
        });
        return await Promise.all(promises);
    },

    async modifyAboutdataPhoto(id, image) {

        const query = `UPDATE aboutdata SET
            photo_url = $1,
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