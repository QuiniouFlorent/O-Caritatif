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
        logger('News create controller called');
        const newNews = req.body;
        const image = req.file ? req.file.path:null;
        logger(image);
        const news = await newsDatamapper.insertNews(newNews, image);
        res.json(news);
    },

    async updateNews(req, res) {
        logger('News modify controller called');
        const id = req.params.id;
        const newsModified = req.body;
        const news = await newsDatamapper.modifyNews(id, newsModified);
        res.json(news);
    },

    async removeNews(req,res) {
        const id = req.params.id;
        const news = await newsDatamapper.deleteNews(id);
        res.json(news);
    }
}

logger('News controller initialized');
export default newsController;