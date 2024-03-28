import debug from 'debug';
const logger = debug('app:server');

import 'dotenv/config';
import express, { urlencoded } from 'express';
const app = express();

import router from './app/router/index.js';
import cors from 'cors';

app.use(cors());

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use('/image', express.static('image'));
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    logger(`Server started on http://localhost:${PORT}`);
});
