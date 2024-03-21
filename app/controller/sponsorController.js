import debug from 'debug';
const logger = debug('app:controller');
import { sponsorDatamapper } from '../datamapper/index.js';

const sponsorController = {
    async getAllSponsor(req,res) {
        logger('Sponsor getAll controller called');
        const sponsors = await sponsorDatamapper.findAllSponsor();
        res.json(sponsors);
    }
}

logger('Sponsor controller initialized');
export default sponsorController;