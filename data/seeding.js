import debug from 'debug';
const logger = debug('app:insertData');
logger.enabled = true;

import { readFile } from 'node:fs/promises';
import client from '../app/models/client.js';

const fakeDataUser = './data/fakeuser.json';
const fakeDataEvent = './data/fakeevent.json';
const fakeDataNews = './data/fakenews.json';
const fakeDataGalery = './data/fakegalery.json';
const fakeDataSponsor = './data/fakesponsor.json';
const fakeDataPhoto = './data/fakephoto.json';
const fakeDataBoardmember = './data/fakeboardmember.json';
const fakeDataRegistration = './data/fakeregistration.json';
const fakeDataSetting = './data/fakesetting.json';
const fakeDataOpinion = './data/fakeopinion.json';

function pgQuoteEscape(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    return value.replaceAll("'", "''");
  }
}

async function insertData(fileName, tableName) {
  try {
    await client.query(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`);
    logger(`Table ${tableName} effacée`);
    const jsonData = await readFile(fileName, 'utf-8');
    const data = JSON.parse(jsonData);

    for (const record of data) {
      const keys = Object.keys(record);
      const values = Object.values(record)
        .map((value) => `'${pgQuoteEscape(value)}'`)
        .join(',');
      const query = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`;
      await client.query(query);
    }
    logger(`Données insérées dans la table ${tableName} avec succès.`);
        
    } catch (error) {
        console.error("Erreur lors de l'insertion des données:", error);
    }
};

(async()=>{
    await insertData(fakeDataUser, `"user"`);
    await insertData(fakeDataNews, `news`);
    await insertData(fakeDataEvent, `event`);
    await insertData(fakeDataGalery, `galery`);
    await insertData(fakeDataSponsor, `sponsor`);
    await insertData(fakeDataPhoto, `photo`);
    await insertData(fakeDataRegistration, 'registration');
    await insertData(fakeDataBoardmember, 'boardmember');
    await insertData(fakeDataSetting, 'setting');
    await insertData(fakeDataOpinion, 'opinion');
    client.end();
})();

