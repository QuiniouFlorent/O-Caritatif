import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';
import filter from '../service/validation/profanity.js';

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
        const content = filter.clean(newComment.content);
        const values = [newComment.user_id, newComment.news_id, content];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifyComment(id, commentModified) {

        const query = `UPDATE comment SET
            content = $1,
            is_active = $2,
            updated_at = NOW()
            WHERE id = $3`;
        const content = filter.clean(commentModified.content);
        const values = [content, commentModified.is_active, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteComment(id) {
        
        const query = 'DELETE FROM comment WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeDeleteQuery(query, values);
    }
};

export default commentDatamapper;