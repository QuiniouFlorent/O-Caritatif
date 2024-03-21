import debug from 'debug';
const logger = debug('app:insertData');

import client from '../app/models/client.js';
import { readFile } from 'node:fs/promises';

const fakeDataUser = './fakeuser.json';
/*
function pgQuoteEscape(row) {
    const newRow = {};
    Object.entries(row).forEach(([prop,value]) => {
        if(typeof value !== 'string') {
            newRow[prop] = value;
            return;
        }
        newRow[prop] = value.replaceAll("'","''");
    })
}*/

async function insertData(fileName, tableName) {
    try {
        await client.query(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`);
        logger(`Table ${tableName} effacée`);
        const jsonData = await readFile(fileName, "utf-8");
        const data = JSON.parse(jsonData);

        for( const record of data ) {
            const keys = Object.keys(record);
            const values = Object.values(record).map((value) => `'${value}'`).join(",");
            const query = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;
            logger(query);
            await client.query(query);
        }
        logger(`Données insérées dans la table ${tableName} avec succès.`) 

    } catch (error) {
        console.error("Erreur lors de l'insertion des données:", error);
    }
};

(async()=>{
    await insertData(fakeDataUser, "user");
})();