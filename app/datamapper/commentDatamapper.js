import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const commentDatamapper= {

    async findAllComment() {
        const query = 'SELECT * FROM comment';

        return datamapperUtil.executeQuery(query);
    },
   
    async insertComment(newComment) {

        const query = `INSERT INTO comment
            (user_id, news_id, content)
            VALUES
            ($1,$2,$3)`;
        const values = [newComment.user_id, newComment.news_id, newComment.content];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyComment(id, commentModified) {

        const query = `UPDATE comment SET
            content = $1,
            is_active = $2,
            updated_at = NOW()
            WHERE id = $3`;
        const values = [commentModified.content, commentModified.is_active, id];
        logger(values)
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteComment(id) {
        
        const query = 'DELETE FROM comment WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default commentDatamapper;