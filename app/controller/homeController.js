import debug from 'debug';
const logger = debug('app:controller');
import { homeDatamapper } from '../datamapper/index.js';

const homeController = {
    async getHomeInfos(req,res) {
        logger('Home controller called');
        const galeries = await homeDatamapper.findLastGalery();
        const news = await homeDatamapper.findLastNews();
        const events = await homeDatamapper.findNextEvent();
        res.json({galeries,news, events});
    }
}

logger('Home controller initialized');
export default homeController;