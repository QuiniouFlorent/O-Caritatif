import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const homedataDatamapper = {

    async findHomedata() {

        const query = 'SELECT * FROM homedata';

        return datamapperUtil.executeQuery(query);
    },

    async insertHomedata(newHomedata) {

        const query = `INSERT INTO homedata
            (first_home_image_content, 
            second_home_image_content, 
            third_home_image_content, 
            about_summary_content,  
            first_media_link, 
            second_media_link, 
            third_media_link)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7)`;

        const values = [             
            newHomedata.first_home_image_content, 
            newHomedata.second_home_image_content, 
            newHomedata.third_home_image_content, 
            newHomedata.about_summary_content,
            newHomedata.first_media_link, 
            newHomedata.second_media_link, 
            newHomedata.third_media_link, 
        ];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyHomedata(homedataModified) {

        const query = `UPDATE homedata SET
            first_home_image_content = $1, 
            second_home_image_content = $2, 
            third_home_image_content = $3, 
            about_summary_content = $4,
            first_media_link = $5,
            second_media_link = $6,
            third_media_link = $7,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [
            homedataModified.first_home_image_content, 
            homedataModified.second_home_image_content, 
            homedataModified.third_home_image_content,  
            homedataModified.about_summary_content, 
            homedataModified.first_media_link, 
            homedataModified.second_media_link, 
            homedataModified.third_media_link
        ];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteHomedata() {

        const query = 'TRUNCATE TABLE homedata RESTART IDENTITY';
        
        return datamapperUtil.executeQuery(query);
    }
}

export default homedataDatamapper;