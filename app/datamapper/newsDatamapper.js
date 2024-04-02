import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const newsDatamapper = {

    async findAllNews() {
        const query = 'SELECT * FROM view_all_news';
        
        return datamapperUtil.executeQuery(query);
    },

    async findOneNews(id) {
        const query = 'SELECT * FROM view_one_news WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertNews(newNews, image) {
        const query = `INSERT INTO news
        (title, category, photo_url, summary, content, author)
        VALUES
        ($1,$2,$3,$4,$5,$6)`
        const values = [newNews.title, newNews.category, image, newNews.summary, newNews.content, newNews.author]
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyNews(id, newsModified) {
        const query = `UPDATE news SET
            title = $1,
            category = $2,
            summary = $3,
            content = $4,
            is_active = $5,
            updated_at = NOW()
            WHERE id = $6`;
        const values = [newsModified.title, newsModified.category, newsModified.summary, newsModified.content, newsModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyNewsPhoto(id, image) {
        const query = `UPDATE news SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2`;
        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },
    
    async deleteNews(id) {
        const query = 'DELETE FROM news WHERE id = $1';
        const values = [id];
        
        return datamapperUtil.executeQuery(query, values);
    }
};

export default newsDatamapper;