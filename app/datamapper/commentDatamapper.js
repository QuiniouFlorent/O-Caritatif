import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const commentDatamapper= {
   
    async insertComment(newComment) {
        try {
            const query = `INSERT INTO comment
            (user_id, news_id, content)
            VALUES
            ($1,$2,$3)`;
            const values = [newComment.user_id, newComment.news_id, newComment.content];
            const response = await client.query(query,values);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error(`Un giga truc horrible s'est produit`);
        }
    },

    async modifyComment(commentModified) {
        const query = `UPDATE comment SET
            content = $1,
            updated_at = NOW()
            WHERE user_id = $2 AND news_id = $3 AND created_at = $4`;
        const values = [commentModified.content, commentModified.user_id, commentModified.news_id, commentModified.created_at];
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier le commentaire');
        }
    },

    async deleteComment(commentValues) {
        const query = 'DELETE FROM comment WHERE user_id = $1 AND news_id = $2 AND created_at = $3';
        const values = [commentValues.user_id, commentValues.news_id, commentValues.created_at];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de commentaire à supprimer');
        }
    }
};

logger('Comment datamapper initialized');
export default commentDatamapper;