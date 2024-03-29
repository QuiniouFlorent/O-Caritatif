import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const commentDatamapper= {
   
    async insertComment(newComment) {

        const query = `INSERT INTO comment
            (user_id, news_id, content)
            VALUES
            ($1,$2,$3)`;
        const values = [newComment.user_id, newComment.news_id, newComment.content];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyComment(commentModified) {

        const query = `UPDATE comment SET
            content = $1,
            is_active = $2,
            updated_at = NOW()
            WHERE user_id = $3 AND news_id = $4 AND created_at = $5`;
        const values = [commentModified.content, commentModified.is_active, commentModified.user_id, commentModified.news_id, commentModified.created_at];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteComment(commentValues) {
        
        const query = 'DELETE FROM comment WHERE user_id = $1 AND news_id = $2 AND created_at = $3';
        const values = [commentValues.user_id, commentValues.news_id, commentValues.created_at];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default commentDatamapper;