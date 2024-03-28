import debug from 'debug';
const logger = debug('app:controller');
import { photoDatamapper } from '../datamapper/index.js';

const photoController = {

    async getAllPhoto(req, res) {
        logger('Photo getAll controller called');
        const photos = await photoDatamapper.findAllPhoto();
        res.json(photos);
    },

    async getOnePhoto(req,res) {
        logger('Photo getOne controller called');
        const id = req.params.id;
        const photo = await photoDatamapper.findOnePhoto(id);
        res.json(photo);
    },

    async createPhoto(req, res) {
        logger('Photo create controller called');
        const newPhoto = req.body;
        const image = req.file.path;
        const photo = await photoDatamapper.insertPhoto(newPhoto, image)
        res.json(photo);
    },

    async updatePhoto(req, res) {
        logger('Photo modify controller called');
        const id = req.params.id;
        const photoModified = req.body;
        const photo = await photoDatamapper.modifyPhoto(id, photoModified);
        res.json(photo);
    },

    async removePhoto(req,res) {
        const id = req.params.id;
        const photo = await photoDatamapper.deletePhoto(id);
        res.json(photo);
    }
}

logger('Photo controller initialized');
export default photoController;