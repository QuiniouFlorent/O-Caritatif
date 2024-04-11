import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const photoaboutDatamapper = {

    async findAllPhotoabout() {

        const query = 'SELECT * FROM photoabout';

        return datamapperUtil.executeQuery(query);
    },
    
    async findOnePhotoabout(id) {

        const query = 'SELECT * FROM photoabout WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertPhotoabout(image) {

        const query = `INSERT INTO photohome
            (photo_url)
            VALUES
            ($1)`;

        const values = [image];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyPhotoabout(id, image) {

        const query = `UPDATE photoabout SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;

        const values = [image, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deletePhotoabout(id) {

        const query = 'DELETE FROM photoabout WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

export default photoaboutDatamapper;