import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const boardmemberDatamapper = {

    async findAllBoardmember() {

        const query = 'SELECT * FROM boardmember ORDER BY position';

        return datamapperUtil.executeQuery(query);
    },

    async findOneBoardmember(id) {

        const query = 'SELECT * FROM boardmember WHERE id =$1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertBoardmember(newBoardmember, image) {

        const query = `INSERT INTO boardmember
            (firstname, lastname, role, description, photo_url, since, position)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7)`;

        const values = [newBoardmember.firstname, newBoardmember.lastname, newBoardmember.role, newBoardmember.description, image, newBoardmember.since, newBoardmember.position];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyBoardmember(boardmemberModified, id) {

        const query = `UPDATE boardmember SET
            firstname = $1, 
            lastname = $2, 
            role = $3, 
            description = $4, 
            since = $5,
            position = $6,
            updated_at = NOW()
            WHERE id = $7`;

        const values = [boardmemberModified.firstname, boardmemberModified.lastname, boardmemberModified.role, boardmemberModified.description, boardmemberModified.since, boardmemberModified.position, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyBoardmemberPosition(boardmemberPositionModified) {
        
        const promises = boardmemberPositionModified.map(boardmember => {

            const query = `UPDATE boardmember SET
            position = $1
            WHERE id = $2`;

            const values = [boardmember.position, boardmember.id];

            return datamapperUtil.executeQuery(query,values);
        });
        return await Promise.all(promises);
    },

    async modifyBoardmemberPhoto(id, image) {

        const query = `UPDATE boardmember SET
        photo_url = $1,
        updated_at = NOW()
        WHERE id = $2
        RETURNING photo_url`;

        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteBoardmember(id) {

        const query = 'DELETE FROM boardmember WHERE id = $1 RETURNING id';

        const values = [id];
        
        return datamapperUtil.executeDeleteQuery(query, values);
    }
}

export default boardmemberDatamapper;