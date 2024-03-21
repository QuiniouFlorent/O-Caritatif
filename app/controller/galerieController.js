import debug from 'debug';
const logger = debug('app:controller');
import { galeryDatamapper } from '../datamapper/index.js';

const galeryController = {
    async getAllGalerie(req, res) {
        logger('Galerie getAll controller called');
        const galeries = await galeryDatamapper.findAllGalery();
        res.json(galeries);
    }
}

logger('Galerie controller initialized');
export default galeryController;