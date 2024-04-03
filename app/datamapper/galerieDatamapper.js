import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const galeryDatamapper= {

    async findAllGalery() {
        const query = 'SELECT * FROM view_all_galery';

        return datamapperUtil.executeQuery(query);
    },

    async findOneGalery(id) {
        const query = 'SELECT * FROM view_one_galery WHERE id = $1';
        const values = [id]
        
        return datamapperUtil.executeQuery(query, values);
    },

    async insertGalery(newGalery) {
                   
        const query = `INSERT INTO galery
        (title, description, category, galery_date)
        VALUES
        ($1,$2,$3,$4)`;
        const values = [newGalery.title, newGalery.description, newGalery.category, newGalery.galery_date];

        return datamapperUtil.executeQuery(query, values);
    },
    
    async modifyGalery(id, galeryModified) {

        const query = `UPDATE galery SET
            title = $1,
            description = $2,
            category = $3,
            galery_date = $4,
            is_active = $5,
            updated_at = NOW()
            WHERE id = $6`;
        const values = [galeryModified.title, galeryModified.description, galeryModified.category, galeryModified.galery_date, galeryModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteGalery(id) {
        
        const query = 'DELETE FROM galery WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default galeryDatamapper;