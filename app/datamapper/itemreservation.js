import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const itemreservationDatamapper= {

    async findAllItemreservation() {

        const query = 'SELECT * FROM itemreservation';

        return datamapperUtil.executeQuery(query);
    },

    async findOneItemreservation(id) {

        const query = 'SELECT * FROM itemreservation WHERE id = $1';

        const values = [id]

        return datamapperUtil.executeQuery(query, values);
    },
   
    async insertItemreservation(newItemreservation) {

        const query = `INSERT INTO itemreservation
            (article_id, user_id, quantity)
            VALUES
            ($1,$2,$3)`;
        const values = [newItemreservation.article_id, newItemreservation.user_id, newItemreservation.quantity];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyItemreservation(id, itemreservationModified) {

        const query = `UPDATE itemreservation SET
            article_id = $1,
            user_id = $2,
            quantity = $3,
            return_date = $4,
            updated_at = NOW()
            WHERE id = $5`;
        const values = [itemreservationModified.article_id, itemreservationModified.user_id, itemreservationModified.quantity, itemreservationModified.return_date, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteItemreservation(id) {
        
        const query = 'DELETE FROM itemreservation WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default itemreservationDatamapper;