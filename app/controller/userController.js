import debug from 'debug';
const logger = debug('app:controller');
import { userDatamapper } from '../datamapper/index.js';

const userController = {
    async getAllUser(req, res) {
        logger('user getAll controller called');
        const users = await userDatamapper.findAllUser();
        res.json(users);
    }
}

logger('User controller initialized');
export default userController;