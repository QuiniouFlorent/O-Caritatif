import debug from 'debug';
const logger = debug('app:datamapper');
import client from '../models/client.js';

const photoDatamapper= {
    async findAllPhoto() {
        const query = 'SELECT * FROM photo';
        try { 
            const response = await client.query(query);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de photo !');
        }
    },

    async findOnePhoto(id) {
        const query = 'SELECT * FROM photo WHERE id = $1';
        const values = [id]
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de photo correspondante !')
        }
    },

    async insertPhoto(newPhoto) {
        try {
            
            const query = `INSERT INTO photo
            (galery_id, photo_url, content)
            VALUES
            ($1,$2,$3)`;
            const values = [null, newPhoto.photo_url, newPhoto.content];
            const response = await client.query(query,values);
            const result = response.rows;
            return result;

        } catch (err) {
            logger(err);
            throw new Error(`Un méga truc horrible s'est produit`);
        }
    },
    
    async modifyPhoto(id, photoModified) {
        const query = `UPDATE photo SET
            galery_id = $1,
            content = $2,
            is_active = $3
            updated_at = NOW()
            WHERE id = $4`;
        const values = [photoModified.galery_id, photoModified.content, photoModified.is_active, id];
        try {
            const response = await client.query(query, values);
            const result = response.rows;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Impossible de modifier la photo');
        }
    },

    async deletePhoto(id) {
        const query = 'DELETE FROM photo WHERE id = $1';
        const values = [id];
        try {
            const response = await client.query(query,values);
            const result = !!response.rowCount;
            return result;
        } catch (err) {
            logger(err);
            throw new Error('Pas de photo à supprimer');
        }
    }
};

logger('Photo datamapper initialized');
export default photoDatamapper;