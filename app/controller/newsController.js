import debug from 'debug';
const logger = debug('app:controller');
import { newsDatamapper } from '../datamapper/index.js';

const newsController = {
    async getAllNews(req, res) {
        logger('News getAll controller called');
        const news = await newsDatamapper.findAllNews();
        res.json(news);
    },
    async getOneNews(req,res) {
        logger('News getOne controller called');
        const id = req.params.id;
        const news = await newsDatamapper.findOneNews(id);
        res.json(news);
    },
    async createNews(req, res) {
        logger('News createNews controller called');
        const newNews = req.body
        const news = await newsDatamapper.insertNews(newNews)
        res.json(news);
    }
}

logger('News controller initialized');
export default newsController;