import debug from 'debug';
const logger = debug('app:controller');
import { sponsorDatamapper } from '../datamapper/index.js';

const sponsorController = {
    async getAllSponsor(req,res) {
        logger('Sponsor getAll controller called');
        const sponsors = await sponsorDatamapper.findAllSponsor();
        res.json(sponsors);
    },
    async getOneSponsor(req,res) {
        logger('Sponsor getOne controller called');
        const id = req.params.id;
        const sponsor = await sponsorDatamapper.findOneSponsor(id);
        res.json(sponsor);
    },

    async createSponsor(req, res) {
        logger('Sponsor create controller called');
        const newSponsor = req.body;
        const image = req.file.path;
        const sponsor = await sponsorDatamapper.insertSponsor(newSponsor, image);
        res.json(sponsor);
    },

    async updateSponsor(req, res) {
        logger('Sponsor modify controller called');
        const id = req.params.id;
        const sponsorModified = req.body;
        const sponsor = await sponsorDatamapper.modifySponsor(id, sponsorModified);
        res.json(sponsor);
    },

    async removeSponsor(req,res) {
        const id = req.params.id;
        const sponsor = await sponsorDatamapper.deleteSponsor(id);
        res.json(sponsor);
    }
}

logger('Sponsor controller initialized');
export default sponsorController;