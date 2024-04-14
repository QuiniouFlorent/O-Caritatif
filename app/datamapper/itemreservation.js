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

    // async modifyItemreservation(id, itemreservationModified) {

    //     const query = `UPDATE itemreservation SET
    //         article_id = $1,
    //         user_id = $2,
    //         quantity = $3,
    //         return_date = $4,
    //         updated_at = NOW()
    //         WHERE id = $5`;
    //     const values = [itemreservationModified.article_id, itemreservationModified.user_id, itemreservationModified.quantity, itemreservationModified.return_date, id];

    //     return datamapperUtil.executeQuery(query, values);
    // },

    async modifyItemreservation(id, itemreservationModified) {

        const setParts = [];
        const values = [];
        let valIndex = 1;

        if (itemreservationModified.article_id !== undefined) {
            setParts.push(`article_id = $${valIndex}`);
            values.push(itemreservationModified.article_id);
            valIndex++;
        }

        if (itemreservationModified.user_id !== undefined) {
            setParts.push(`user_id = $${valIndex}`);
            values.push(itemreservationModified.user_id);
            valIndex++;
        }

        if (itemreservationModified.quantity !== undefined) {
            setParts.push(`quantity = $${valIndex}`);
            values.push(itemreservationModified.quantity);
            valIndex++;
        }

        if (itemreservationModified.return_date !== undefined) {
            setParts.push(`return_date = $${valIndex}`);
            values.push(itemreservationModified.return_date);
            valIndex++;
        }

    setParts.push(`updated_at = NOW()`);
    values.push(id);

    const query = `UPDATE itemreservation SET ${setParts.join(', ')} WHERE id = $${valIndex}`;
    return datamapperUtil.executeQuery(query, values);
},


    async deleteItemreservation(id) {
        
        const query = 'DELETE FROM itemreservation WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default itemreservationDatamapper;