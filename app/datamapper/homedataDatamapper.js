import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const homedataDatamapper = {

    async findHomedata() {

        const query = 'SELECT * FROM homedata';

        return datamapperUtil.executeQuery(query);
    },

    async insertHomedata(newHomedata, image) {

        const query = `INSERT INTO homedata
            (association_name, association_logo_url, image_header_content, adress, first_media_link, second_media_link, third_media_link, boutique_is_active, galery_is_active, event_is_active)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

        const values = [newHomedata.association_name, image, newHomedata.image_header_content, newHomedata.adress, newHomedata.first_media_link, newHomedata.second_media_link, newHomedata.third_media_link, newHomedata.boutique_is_active, newHomedata.galery_is_active, newHomedata.event_is_active];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyHomedata(homedataModified) {

        const query = `UPDATE sponsor SET
            association_name = $1,
            image_header_content = $2,
            adress = $3,
            first_media_link = $4,
            second_media_link = $5,
            third_media_link = $6,
            boutique_is_active = $7,
            galery_is_active = $8, 
            event_is_active = $9,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [homedataModified.association_name, homedataModified.image_header_content, homedataModified.adress, homedataModified.first_media_link, homedataModified.second_media_link, homedataModified.third_media_link, homedataModified.boutique_is_active, homedataModified.galery_is_active, homedataModified.event_is_active];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyHomedataLogo(image) {

        const query = `UPDATE homedata SET
        association_logo_url = $1,
        updated_at = NOW()
        WHERE id = 1
        RETURNING association_logo_url `;

        const values = [image];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteHomedata() {

        const query = 'TRUNCATE TABLE homedata RESTART IDENTITY';
        
        return datamapperUtil.executeQuery(query);
    }
}

export default homedataDatamapper;