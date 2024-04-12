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

    async insertPhotoabout(image, newPhotoabout) {

        const query = `INSERT INTO photoabout
            (photo_url, position)
            VALUES
            ($1; $2)`;

        const values = [image, newPhotoabout.position];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyPhotoaboutPosition(photoaboutPositionModified) {

        const promises = photoaboutPositionModified.map(photoabout => {

            const query = `UPDATE photoabout SET
            position = $1
            WHERE id = $2`;

            const values = [photoabout.position, photoabout.id];

            return datamapperUtil.executeQuery(query, values);
        });
        return await Promise.all(promises);
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