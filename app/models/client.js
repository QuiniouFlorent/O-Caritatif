import debug from 'debug';
const logger = debug('app:client');
import 'dotenv/config';

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
});
const client = await pool.connect();

logger('client initialized');
export default client;
