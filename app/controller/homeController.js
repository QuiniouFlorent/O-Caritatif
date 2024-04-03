import debug from 'debug';
const logger = debug('app:controller');
import { homeDatamapper } from '../datamapper/index.js';

const homeController = {
    async getHomeInfos(req,res) {
        logger('Home controller called');
        const galery = await homeDatamapper.findLastGalery();
        const news = await homeDatamapper.findLastNews();
        const events = await homeDatamapper.findNextEvent();
        res.json({ galery, news, events });
    }
}

logger('Home controller initialized');
export default homeController;