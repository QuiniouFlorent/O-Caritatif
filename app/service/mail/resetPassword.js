import 'dotenv/config';
import debug from 'debug';
const logger = debug('app:password');

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "",
    port: 12345,
    secure: false,
    auth:{
        user: "",
        pass: ""
    }
});

transporter.sendMail(data);