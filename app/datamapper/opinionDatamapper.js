import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const opinionDatamapper = {
    async findAllOpinion() {
        const query = 'SELECT * FROM opinion';

        return datamapperUtil.executeQuery(query);
    },

    async findOneOpinion(id) {
        const query = 'SELECT * FROM opinion WHERE id = $1';
        const values = [id]
       
        return datamapperUtil.executeQuery(query, values);
    },

    async insertOpinion(newOpinion) {
        const query = `INSERT INTO opinion
        (firstname, content, number_star, position)
        VALUES
        ($1,$2,$3, $4)`;
        const values = [newOpinion.firstname, newOpinion.content, newOpinion.number_star, newOpinion.position];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyOpinion(id, opinionModified) {
        const query = `UPDATE opinion SET
            firstname = $1,
            content = $2,
            number_star = $3,
            position = $4,
            updated_at = NOW()
            WHERE id = $5`;
        const values = [opinionModified.firstname, opinionModified.content, opinionModified.number_star, opinionModified.position, id]
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteOpinion(id) {
        const query = 'DELETE FROM opinion WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
}

export default opinionDatamapper;