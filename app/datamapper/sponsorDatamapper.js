import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const sponsorDatamapper = {
    async findAllSponsor(){
        const query = 'SELECT * FROM "sponsor"';
        try {
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de sponsor !');
        }
    },

    async findOneSponsor(id) {
        const query = 'SELECT * FROM sponsor WHERE id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de sponsor correspondant !')
        }
    },

    async insertSponsor(newSponsor) {
        const query = `INSERT INTO sponsor
        (name, link_url, photo_url)
        VALUES
        ($1,$2,$3)`
        const values = [newSponsor.name, newSponsor.link_url, newSponsor.photo_url]
        try {
            const response = await client.query(query,values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error(`Un truc super méga horrible s'est produit`);
        }
    },

    async modifySponsor(id, sponsorModified) {
        const query = `UPDATE sponsor SET
            name = $1,
            link_url = $2,
            photo_url = $3,
            updated_at = NOW()
            WHERE id = $4`;
        const values = [sponsorModified.name, sponsorModified.link_url, sponsorModified.photo_url, id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier le sponsor');
        }
    },

    async deleteSponsor(id) {
        const query = 'DELETE FROM sponsor WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de sponsor à supprimer');
        }
    }
}

logger('Sponsor datamapper initialized');
export default sponsorDatamapper;