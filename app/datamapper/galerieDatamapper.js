import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const galeryDatamapper= {
    async findAllGalery() {
        const query = 'SELECT * FROM "galery"';
        try { 
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galerie !');
        }
    },

    async findOneGalery(id) {
        const query = 'SELECT * FROM photo WHERE galery_id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galerie correspondante !')
        }
    },

    async insertGalery(newNews) {
        const query = `INSERT INTO galery
        (title, category, photo_url, summary, content, author)
        VALUES
        ($1,$2,$3,$4,$5,$6)`
        const values = [newNews.title, newNews.category, newNews.photo_url, newNews.summary, newNews.content, newNews.author]
        try {
            const response = await client.query(query,values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error(`Un truc horrible s'est produit`);
        }
    },

    async modifyNews(id, newsModified) {
        const query = `UPDATE news SET
            title = $1,
            category = $2,
            photo_url = $3,
            summary = $4,
            content = $5,
            updated_at = NOW()
            WHERE id = $6`;
        const values = [newsModified.title, newsModified.category, newsModified.photo_url, newsModified.summary, newsModified.content, id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier la news');
        }
    },

    async deleteNews(id) {
        const query = 'DELETE FROM news WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de news à supprimer');
        }
    }
};

logger('Galerie datamapper initialized');
export default galeryDatamapper;