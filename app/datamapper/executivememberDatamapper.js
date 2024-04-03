import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const executivememberDatamapper = {

    async findAllExecutivemember() {

        const query = 'SELECT * FROM executivememeber';

        return datamapperUtil.executeQuery(query);
    },

    async findOneExecutivemember(id) {

        const query = 'SELECT * FROM executivememeber WHERE id =$1';
        const values = [id];

        return datamapperUtil.executeQuery(query, values);
    },

    async insertExecutivemember(newExecutivemember, image) {

        const query = `INSERT INTO executivemember
            (firstname, lastname, role, description, photo_url, since)
            VALUES
            ($1, $2, $3, $4, $5, $6)`;

        const values = [newHomedata.association_name, image, newHomedata.image_header_content, newHomedata.adress, newHomedata.facebook_link, newHomedata.instagram_link, newHomedata.tiktok_link];
    
        return datamapperUtil.executeQuery(query, values);
    },

    async modifyHomedata(homedataModified) {

        const query = `UPDATE sponsor SET
            association_name = $1,
            image_header_content = $2,
            adress = $3,
            facebook_link = $4,
            instagram_link = $5,
            tiktok_link = $6,
            updated_at = NOW()
            WHERE id = 1`;

        const values = [homedataModified.association_name, homedataModified.image_header_content, homedataModified.adress, homedataModified.facebook_link, homedataModified.instagram_link, homedataModified.tiktok_link];
        
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

export default executivememberDatamapper;