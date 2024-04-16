import debug from 'debug';
const logger = debug('app:client');
import 'dotenv/config';

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    //user: process.env.PGUSER,
    //host: process.env.PGHOST,
    //database: process.env.PGDATABASE,
   // password: process.env.PGPASSWORD,
    //port: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false
    }
});
const client = await pool.connect();

logger('client initialized');
export default client;
