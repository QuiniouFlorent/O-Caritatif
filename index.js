import debug from 'debug';
const logger = debug('app:server');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import 'dotenv/config';
import express, { urlencoded } from 'express';
const app = express();

import router from './app/router/index.js';
import cors from 'cors';

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
logger(__dirname);

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use('/image', express.static('image'));
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    logger(`Server started on http://localhost:${PORT}`);
});
