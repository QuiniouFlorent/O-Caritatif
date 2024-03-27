import debug from 'debug';
const logger = debug('app:controller');
import { opinionDatamapper } from '../datamapper/index.js';

const opinionController = {
    async getAllOpinion(req,res) {
        logger('Opinion getAll controller called');
        const opinions = await opinionDatamapper.findAllOpinion();
        res.json(opinions);
    },

    async getOneOpinion(req,res) {
        logger('Opinion getOne controller called');
        const id = req.params.id;
        const opinion = await opinionDatamapper.findOneOpinion(id);
        res.json(opinion);
    },

    async createOpinion(req, res) {
        logger('Opinion create controller called');
        const newOpinion = req.body;
        const opinion = await opinionDatamapper.insertOpinion(newOpinion)
        res.json(opinion);
    },

    async updateOpinion(req, res) {
        logger('Opinion modify controller called');
        const id = req.params.id;
        const opinionModified = req.body;
        const opinion = await opinionDatamapper.modifyOpinion(id, opinionModified);
        res.json(opinion);
    },

    async removeOpinion(req,res) {
        const id = req.params.id;
        const opinion = await opinionDatamapper.deleteOpinion(id);
        res.json(opinion);
    }
}

logger('Opinion controller initialized');
export default opinionController;