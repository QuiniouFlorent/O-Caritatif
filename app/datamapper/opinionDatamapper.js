import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const opinionDatamapper = {
    async findAllOpinion() {
        const query = 'SELECT * FROM opinion ORDER BY position ASC';

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
            is_active = $5,
            updated_at = NOW()
            WHERE id = $6`;
        const values = [opinionModified.firstname, opinionModified.content, opinionModified.number_star, opinionModified.position, opinionModified.is_active, id]
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyOpinionPosition(opinionPositionModified) {

        const promises = opinionPositionModified.map(opinion => {

            const query = `UPDATE opinion SET
            position = $1
            WHERE id = $2`;
            
            const values = [opinion.position, opinion.id];

            return datamapperUtil.executeQuery(query, values);
        });
        return await Promise.all(promises);
    },

    async deleteOpinion(id) {
        const query = 'DELETE FROM opinion WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeDeleteQuery(query, values);
    }
}

export default opinionDatamapper;