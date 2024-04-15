import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const itemDatamapper = {

    async findAllItem(){

        const query = 'SELECT * FROM item';

        return datamapperUtil.executeQuery(query);
    },

    async findOneItem(id) {

        const query = 'SELECT * FROM item WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertItem(newItem, image) {

        const query = `INSERT INTO item
        (name, description, category, type, quantity_available, photo_url)
        VALUES
        ($1, $2, $3, $4, $5, $6)`;

        const values = [newItem.name, newItem.description, newItem.category, newItem.type, newItem.quantity_available, image];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyItem(id, itemModified) {

        const query = `UPDATE item SET
            name = $1,
            description = $2,
            category = $3,
            type = $4,
            quantity_available = $5,
            is_active = $6,
            updated_at = NOW()
            WHERE id = $7`;

        const values = [itemModified.name, itemModified.description, itemModified.category, itemModified.type, itemModified.quantity_available, itemModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyItemPhoto(id, image) {
        
        const query = `UPDATE item SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;

        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteItem(id) {

        const query = 'DELETE FROM item WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeDeleteQuery(query, values);
    }
}

export default itemDatamapper;