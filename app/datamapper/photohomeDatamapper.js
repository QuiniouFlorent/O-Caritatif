import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const photohomeDatamapper = {

    async findPhotohome() {

        const query = 'SELECT * FROM photohome';

        return datamapperUtil.executeQuery(query);
    },

    async insertPhotohome(newPhotohome) {

        const query = `INSERT INTO photohome
            (about_us_photo_url, first_photo_url, second_photo_url, third_photo_url)
            VALUES
            ($1, $2, $3, $4)`;

        const values = [newPhotohome.about_us_photo_url, newPhotohome.first_photo_url, newPhotohome.second_photo_url, newPhotohome.third_photo_url];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyPhotohome(photohomeModified) {

        const query = `UPDATE photohome SET
            about_us_photo_url = $1,
            first_photo_url = $2,
            second_photo_url = $3,
            third_photo_url = $4,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [photohomeModified.about_us_photo_url, photohomeModified.first_photo_url, photohomeModified.second_photo_url, photohomeModified.third_photo_url];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deletePhotohome() {

        const query = 'TRUNCATE TABLE photohome RESTART IDENTITY';
        
        return datamapperUtil.executeQuery(query);
    }
}

export default photohomeDatamapper;