import debug from 'debug';
import datamapperUtil from '../service/util/datamapper.js';
const logger = debug('app:datamapper');

const settingDatamapper = {
  async findSetting() {
    const query = 'SELECT * FROM setting';

    return datamapperUtil.executeQuery(query);
  },

  async insertSetting(newSetting, image) {
    const query = `INSERT INTO setting
            (association_name, 
            association_logo_url, 
            primary_color,
            adress,
            email_asso,
            email_password,
            boutique_is_active, 
            galery_is_active, 
            event_is_active)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

    const values = [
      newSetting.association_name,
      image,
      newSetting.primary_color,
      newSetting.adress,
      newSetting.email_asso,
      newSetting.email_password,
      newSetting.boutique_is_active,
      newSetting.galery_is_active,
      newSetting.event_is_active,
    ];

    return datamapperUtil.executeQuery(query, values);
  },

  async modifySetting(settingModified) {
    const query = `UPDATE setting SET
            association_name = $1,  
            primary_color = $2,
            adress = $3,
            email_asso = $4,
            email_password = $5,
            boutique_is_active = $6, 
            galery_is_active = $7, 
            event_is_active = $8,
            updated_at = NOW()
            WHERE id = 1`;

    const values = [
      settingModified.association_name,
      settingModified.primary_color,
      settingModified.adress,
      settingModified.email_asso,
      settingModified.email_password,
      settingModified.boutique_is_active,
      settingModified.galery_is_active,
      settingModified.event_is_active,
    ];

    return datamapperUtil.executeQuery(query, values);
  },

  async modifySettingLogo(image) {
    const query = `UPDATE setting SET
        association_logo_url = $1,
        updated_at = NOW()
        WHERE id = 1
        RETURNING association_logo_url `;

    const values = [image];

    return datamapperUtil.executeQuery(query, values);
  },

  async deleteSetting() {
    const query = 'TRUNCATE TABLE setting RESTART IDENTITY';

    return datamapperUtil.executeQuery(query);
  },
};

export default settingDatamapper;
