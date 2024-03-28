import debug from 'debug';
const logger = debug('app:controller');
import { userDatamapper } from '../datamapper/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

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

    async loginUser(req, res) {
        logger('Login controller called');
        const [result] = await userDatamapper.findUser(req.body);
        const isEqual = await bcrypt.compare(req.body.password, result.password);

        if(isEqual) {
            delete result.password;
            const token = jwt.sign(result, process.env.JWT_SECRET);
            res.json(token);

        } else {
            throw new Error('Y a un soucis là !!')
        }
    },

    async createUser(req, res) {
        logger('User create controller called');
        const newUser = req.body;
        const image = /*req.file.path*/null;
        const hash = await bcrypt.hash(newUser.password, parseInt(process.env.PASSWORD_SALT));
        newUser.password = hash;
        const user = await userDatamapper.insertUser(newUser, image);
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