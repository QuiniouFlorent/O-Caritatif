import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const sponsorDatamapper = {

    async findAllSponsor(){

        const query = 'SELECT * FROM "sponsor"';

        return datamapperUtil.executeQuery(query);
    },

    async findOneSponsor(id) {

        const query = 'SELECT * FROM sponsor WHERE id = $1';
        const values = [id]

        return datamapperUtil.executeQuery(query, values);
    },

    async insertSponsor(newSponsor, image) {

        const query = `INSERT INTO sponsor
        (name, link_url, photo_url)
        VALUES
        ($1,$2,$3)`
        const values = [newSponsor.name, newSponsor.link_url, image];

        return datamapperUtil.executeQuery(query, values);
    },

    async modifySponsor(id, sponsorModified) {

        const query = `UPDATE sponsor SET
            name = $1,
            link_url = $2,
            photo_url = $3,
            is_active = $4,
            updated_at = NOW()
            WHERE id = $5`;
        const values = [sponsorModified.name, sponsorModified.link_url, sponsorModified.photo_url, sponsorModified.is_active, id];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteSponsor(id) {

        const query = 'DELETE FROM sponsor WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    }
}

export default sponsorDatamapper;