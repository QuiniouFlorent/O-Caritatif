import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const galeryDatamapper= {
    async findAllGalery() {
        const query = 'SELECT * FROM "galery"';
        try { 
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galerie !');
        }
    },

    async findOneGalery(id) {
        const query = 'SELECT * FROM view_one_galery WHERE galery_id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galerie correspondante !')
        }
    },
/*
    async insertGalery(newGalery, newPhoto) {
        try {
            await client.query('BEGIN');
            const query = `INSERT INTO galery
            (title, description, category, galery_date)
            VALUES
            ($1,$2,$3,$4) RETURNING id`;
            const values = [newGalery.title, newGalery.description, newGalery.category, newGalery.galery_date];
            const response = await client.query(query,values);
            const result = response.rows;
            const galery_id = result[0].id;

            for (const photo of newPhoto) {
                const query2 = `INSERT INTO photo
                (galery_id, photo_url,content)
                VALUES
                ($1,$2,$3)`;
                const values2 = [galery_id, photo.photo_url, photo.content];
                await client.query(query2, values2);
            }
            await client.query('COMMIT');
            return result;

        } catch (err) {
            await client.query('ROLLBACK');
            logger(err);
            throw new Error(`Un truc horrible s'est produit`);
        }
    },*/
    async insertGalery(newGalery) {
        try {
            
            const query = `INSERT INTO galery
            (title, description, category, galery_date)
            VALUES
            ($1,$2,$3,$4)`;
            const values = [newGalery.title, newGalery.description, newGalery.category, newGalery.galery_date];
            const response = await client.query(query,values);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error(`Un truc horrible s'est produit`);
        }
    },
    
// TODO !!!
    async modifyGalery(id, galeryModified) {
        const query = `UPDATE galery SET
            title = $1,
            description = $2,
            category = $3,
            galery_date = $4,
            updated_at = NOW()
            WHERE id = $5`;
        const values = [galeryModified.title, galeryModified.description, galeryModified.category, galeryModified.galery_date, id];
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier la galerie');
        }
    },

    async deleteGalery(id) {
        const query = 'DELETE FROM galery WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de galery à supprimer');
        }
    }
};

logger('Galerie datamapper initialized');
export default galeryDatamapper;