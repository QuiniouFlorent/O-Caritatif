import { createuserSchema, loginSchema } from './schema.js';
import APIerror from '../error/APIerror.js';
import vine, { SimpleMessagesProvider } from '@vinejs/vine';
import debug from 'debug';
const logger = debug('app:validate');

const messages = {
    string: 'The {{ field }} field must be a string',
    email: 'The {{ field }} field must be a valid email address',
    minLength: 'The {{ field }} field must have at least {{ min }} characters',
    confirmed: 'The {{ field }} field and {{ otherField }} field must be the same',
    jwt: 'The {{ field }} field must be a valid JWT token',
    url: 'The {{ field }} field must be a valid URL'
};

const validate = {
    async loginUser( req, res, next ) {
        const fields = {
            email: 'email',
            password: 'password'
        };        
        const messagesProvider = new SimpleMessagesProvider(messages, fields);
        
        try {
            const validator = vine.compile(loginSchema);
            const result = await validator.validate(req.body);
            next();
    
        } catch (error) {
            next(new APIerror(error.messages[0].message, 400));
        } 
    },
    
    async createUser( req, res, next ) {
        const fields = {
            email: 'email',
            lastname: 'lastname',
            firstname: 'firstname',
            password: 'password'
        }; 
        const messagesProvider = new SimpleMessagesProvider(messages, fields);
        
        try {
            const validator = vine.compile(createuserSchema);
            const result = await validator.validate(req.body);
            next();
    
        } catch (error) {
            next(new APIerror(error.messages[0].message, 400));
        } 
    }
}

export default validate;