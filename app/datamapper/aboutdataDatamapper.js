import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const aboutdataDatamapper = {

    async findAboutdata() {

        const query = 'SELECT * FROM aboutdata';

        return datamapperUtil.executeQuery(query);
    },

    async insertAboutdata(newAboutdata) {

        const query = `INSERT INTO aboutdata
            (about_title, about_home_summary, about_us_content, first_paragraph_title, second_paragraph_title, third_paragraph_title, first_paragraph_content, second_paragraph_content, third_paragraph_content)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

        const values = [newAboutdata.about_title, newAboutdata.about_home_summary, newAboutdata.about_us_content, newAboutdata.first_paragraph_title, newAboutdata.second_paragraph_title, newAboutdata.third_paragraph_title, newAboutdata.first_paragraph_content, newAboutdata.second_paragraph_content, newAboutdata.third_paragraph_content];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyAboutdata(aboutdataModified) {

        const query = `UPDATE aboutdata SET
            about_title = $1,
            about_home_summary = $2,
            about_us_content = $3,
            first_paragraph_title = $4,
            second_paragraph_title = $5,
            third_paragraph_title = $6,
            first_paragraph_content = $7,
            second_paragraph_content = $8, 
            third_paragraph_content = $9,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [aboutdataModified.about_title, aboutdataModified.about_home_summary, aboutdataModified.about_us_content, aboutdataModified.first_paragraph_title, aboutdataModified.second_paragraph_title, aboutdataModified.third_paragraph_title, aboutdataModified.first_paragraph_content, aboutdataModified.second_paragraph_content, aboutdataModified.third_paragraph_content];
        
        return datamapperUtil.executeQuery(query, values);
    },

    async deleteAboutdata() {

        const query = 'TRUNCATE TABLE aboutdata RESTART IDENTITY';
        
        return datamapperUtil.executeQuery(query);
    }
}

export default aboutdataDatamapper;