import 'dotenv/config';
import debug from 'debug';
const logger = debug('app:password');

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.GMAIL_ADRESS,
        pass: process.env.GMAIL_PW
    }
});

const data = {
    from: process.env.GMAIL_ADRESS,
    to: "",
    subject: "Réinitialisation du mot de passe",
    text: "Bonjour, pour réinitiliser votre mot de passe :"
};

transporter.sendMail(data);

