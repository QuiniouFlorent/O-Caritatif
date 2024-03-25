import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const newsDatamapper = {
    async findAllNews() {
        const query = 'SELECT * FROM view_all_news';
        try {
            const response = await client.query(query); 
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error('Pas de news !');
        }
    },
    async findOneNews(id) {
        const query = 'SELECT * FROM view_one_news WHERE id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de news correspondante !')
        }
    },
    async insertNews(newNews) {
        const query = `INSERT INTO news
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
    }
};

logger('News datamapper initialized');
export default newsDatamapper;