import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const photohomeDatamapper = {

    async findAllPhotohome() {

        const query = 'SELECT * FROM photohome';

        return datamapperUtil.executeQuery(query);
    },
    
    async findOnePhotohome(id) {

        const query = 'SELECT * FROM photohome WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertPhotohome(newPhotohome, image) {

        const query = `INSERT INTO photohome
            (content, photo_url, align)
            VALUES
            ($1, $2, $3)`;

        const values = [newPhotohome.content,image, newPhotohome.align];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyPhotohome(id, photohomeModified) {

        const query = `UPDATE photohome SET
            content = $1,
            align = $2,
            updated_at = NOW()
            WHERE id = $3`;

        const values = [photohomeModified.content, photohomeModified.align, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyPhotohomePhoto(id, image) {

        const query = `UPDATE photohome SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;
            
        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deletePhotohome(id) {

        const query = 'DELETE FROM photohome WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

export default photohomeDatamapper;