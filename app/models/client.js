import debug from 'debug';
const logger = debug('app:client');
import 'dotenv/config';

//import { Pool } from 'pg';
//const pool = new Pool();
import pkg from 'pg';
const { Client } = pkg;
const client = new Client();
client.connect();

logger('client initialized');
export default client;
