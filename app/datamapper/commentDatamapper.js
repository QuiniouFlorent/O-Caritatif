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
//TODO : id ??
    async modifyComment(id, commentModified) {
        const query = `UPDATE comment SET
            content = $1,
            updated_at = NOW()
            WHERE id = $2`;
        const values = [commentModified.content, id];
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier le commentaire');
        }
    },
//TODO : id ?? 
    async deleteComment(id) {
        const query = 'DELETE FROM comment WHERE id = $1';
        const values = [id];
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