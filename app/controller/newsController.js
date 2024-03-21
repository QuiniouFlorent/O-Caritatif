import debug from 'debug';
const logger = debug('app:controller');
import { newsDatamapper } from '../datamapper/index.js';

const newsController = {
    async getAllNews(req, res) {
        logger('News getAll controller called');
        const news = await newsDatamapper.findAllNews();
        res.json(news);
    }
}

logger('News controller initialized');
export default newsController;