import 'dotenv/config';
import debug from 'debug';
const logger = debug('app:password');

import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

function resetToken(email) {
    const payload = {email: email};
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
/*
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
*/
export {resetToken};