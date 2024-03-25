import debug from 'debug';
const logger = debug('app:controller');
import { userDatamapper } from '../datamapper/index.js';

const userController = {
    async getAllUser(req, res) {
        logger('user getAll controller called');
        const users = await userDatamapper.findAllUser();
        res.json(users);
    },

    async getOneUser(req,res) {
        logger('user getOne controller called');
        const id = req.params.id;
        const user = await userDatamapper.findOneUser(id);
        res.json(user);
    },

    async updateUser(req, res) {
        logger('user update controller called');
        const id = req.params.id;
        const userModified = req.body;
        const user = await userDatamapper.modifyUser(id, userModified);
        res.json(user);
    },

    async removeUser(req, res) {
        const id = req.params.id;
        const user = await userDatamapper.deleteUser(id);
        res.json(user);
    }
}

logger('User controller initialized');
export default userController;