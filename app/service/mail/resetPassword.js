import 'dotenv/config';
import debug from 'debug';
const logger = debug('app:password');

import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import APIerror from '../error/APIerror.js';
import oauth2Client from './oauth2.js';

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});
const ACCES_TOKEN = oauth2Client.getAccessToken();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        type: 'OAuth2',
        user: process.env.GMAIL_ADRESS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCES_TOKEN
    },
    tls:{
        rejectUnauthorized: true
    }
    }
);

function resetToken(email) {
    const payload =  { email: email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

function sendMail(to, subject, text) {
    const mailOptions = {
        from: process.env.GMAIL_ADRESS,
        to: to,
        subject: subject,
        text: text
    };
     transporter.sendMail(mailOptions, function(err, info) {
        let error;
        let result;
        if (err) {
            return error = new APIerror('Erreur lors de l\'envoi de l\'email', err);
        } else {
            return result = 'Email envoyé',info.response
        }
    });
};

//TODO factoriser !
//function resetPassword(useremail, newPassword) {

//};


export {resetToken, sendMail};