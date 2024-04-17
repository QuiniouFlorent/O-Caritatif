import 'dotenv/config';

import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import APIerror from '../error/APIerror.js';
import oauth2Client from './oauth2.js';
import logger from '../logs/logger.js';

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

async function sendMail(to, subject, text) {

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

async function sendMailReset(to, token) {
    return new Promise((resolve, reject) => {
        const mailOptions = {
            from: process.env.GMAIL_ADRESS,
            to: to,
            subject: 'Réinitialisation du mot de passe',
            text : `Vous recevez cet email car vous avez demandé la réinitialisation de votre mot de passe.
            Veuillez cliquez sur le lien suivant pour enregistrer votre nouveau mot de passe :
            http://localhost:5173/login/resetpassword/${token}`
        };
        transporter.sendMail(mailOptions , function(error, info) {
            if (error) {
                error = new APIerror(`Error sending email : ${error.message}`);
                logger.error(`${error}`);
                resolve(error);
            } else {
                result = info.response;
                resolve(true);
            }
        });
    })
}
    

export {resetToken, sendMail, sendMailReset};