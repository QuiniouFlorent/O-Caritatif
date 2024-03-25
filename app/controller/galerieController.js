import debug from 'debug';
const logger = debug('app:controller');
import { galeryDatamapper } from '../datamapper/index.js';

const galeryController = {

    async getAllGalerie(req, res) {
        logger('Galerie getAll controller called');
        const galeries = await galeryDatamapper.findAllGalery();
        res.json(galeries);
    },

    async getOneGalerie(req,res) {
        logger('Galerie getOne controller called');
        const id = req.params.id;
        const galery = await galeryDatamapper.findOneGalery(id);
        res.json(galery);
    },

    async createGalerie(req, res) {
        logger('Galerie create controller called');
        const { newGallery, newPhoto } = req.body;
        const newGalery = {
            title: newGallery.title, 
            description: newGallery.description,
            category: newGallery.category,
            galery_date: newGallery.galery_date
        }
        const galery = await galeryDatamapper.insertGalery(newGalery, newPhoto)
        res.json(galery);
    },

    async updateGalerie(req, res) {
        logger('Galerie modify controller called');
        const id = req.params.id;
        const galeryModified = req.body;
        const galery = await galeryDatamapper.modifyGalery(id, galeryModified);
        res.json(galery);
    },

    async removeGalerie(req,res) {
        const id = req.params.id;
        const galery = await galeryDatamapper.deleteGalery(id);
        res.json(galery);
    }
}

logger('Galerie controller initialized');
export default galeryController;