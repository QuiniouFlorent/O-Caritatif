import debug from 'debug';
const logger = debug('app:controller');
import { userDatamapper } from '../datamapper/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import controllerUtil from '../service/util/controller.js';

const userController = {
    async getAllUser( req, res, next ) {

        logger('user getAll controller called');
        const { result, error } = await userDatamapper.findAllUser();
        controllerUtil.manageResponse(error, result, res, next);
    },

    async getOneUser( req, res, next ) {

        logger('user getOne controller called');
        const id = req.params.id;
        const { result, error } = await userDatamapper.findOneUser(id);
        controllerUtil.manageResponse(error, result, res, next);
    },

//TODO ! Else throw new error ???
    async loginUser( req, res, next ) {

        logger('Login controller called');
        const { result, error } = await userDatamapper.findUser(req.body);
        
        const isEqual = await bcrypt.compare(req.body.password, result[0].password);

        if(isEqual) {
            delete result.password;
            const token = jwt.sign(result[0], process.env.JWT_SECRET);
            controllerUtil.manageResponse(error, token, res, next);
        } else {
            throw new Error('Y a un soucis là !!')
        }
    },

    async createUser( req, res, next ) {

        logger('User create controller called');
        const newUser = req.body;
        const image = /*req.file.path*/null;
        const hash = await bcrypt.hash(newUser.password, parseInt(process.env.PASSWORD_SALT));
        newUser.password = hash;
        const { result, error } = await userDatamapper.insertUser(newUser, image);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateUser( req, res, next ) {

        logger('user update controller called');
        const id = req.params.id;
        const userModified = req.body;
        const { result, error } = await userDatamapper.modifyUser(id, userModified);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async updateUserPhoto( req, res, next ) {
        logger('User modify Photo controller called');
        const id = req.params.id;
        const image =  req.file ? req.file.path:null;
        const { result, error } = await userDatamapper.modifyUserPhoto(id, image);
        controllerUtil.manageResponse(error, result, res, next);
    },

    async removeUser( req, res, next ) {

        const id = req.params.id;
        const { result, error } = await userDatamapper.deleteUser(id);
        controllerUtil.manageResponse(error, result, res, next);
    }
}

logger('User controller initialized');
export default userController;