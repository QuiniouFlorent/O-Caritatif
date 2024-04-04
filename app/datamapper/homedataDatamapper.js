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
            (association_name, 
            association_logo_url, 
            first_home_image_content, 
            second_home_image_content, 
            third_home_image_content, 
            about_summary_content, 
            adress, 
            first_media_link, 
            second_media_link, 
            third_media_link, 
            boutique_is_active, 
            galery_is_active, 
            event_is_active)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12; $13)`;

        const values = [newHomedata.association_name, 
            image, 
            newHomedata.first_home_image_content, 
            newHomedata.second_home_image_content, 
            newHomedata.third_home_image_content, 
            newHomedata.about_summary_content,
            newHomedata.adress, 
            newHomedata.first_media_link, 
            newHomedata.second_media_link, 
            newHomedata.third_media_link, 
            newHomedata.boutique_is_active, 
            newHomedata.galery_is_active, 
            newHomedata.event_is_active];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyHomedata(homedataModified) {

        const query = `UPDATE homedata SET
            association_name = $1,
            first_home_image_content = $2, 
            second_home_image_content = $3, 
            third_home_image_content = $4, 
            about_summary_content = $5,
            adress = $6,
            first_media_link = $7,
            second_media_link = $8,
            third_media_link = $9,
            boutique_is_active = $10,
            galery_is_active = $11, 
            event_is_active = $12,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [homedataModified.association_name,
            homedataModified.first_home_image_content, 
            homedataModified.second_home_image_content, 
            homedataModified.third_home_image_content, 
            homedataModified.image_header_content, 
            homedataModified.adress, 
            homedataModified.first_media_link, 
            homedataModified.second_media_link, 
            homedataModified.third_media_link, 
            homedataModified.boutique_is_active, 
            homedataModified.galery_is_active, 
            homedataModified.event_is_active];
        
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