import debug from 'debug';
import datamapperUtil from '../service/util/datamapper.js';
const logger = debug('app:datamapper');

const photoDatamapper = {
  async findAllPhoto() {
    const query = 'SELECT * FROM photo';

    return datamapperUtil.executeQuery(query);
  },

  async findOnePhoto(id) {
    const query = 'SELECT * FROM photo WHERE id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },

  async insertPhoto(newPhoto, image) {
    const query = `INSERT INTO photo
        (galery_id, photo_url, content)
        VALUES
        ($1,$2,$3)`;
    const values = [newPhoto.galery_id, image, newPhoto.content];

    return datamapperUtil.executeQuery(query, values);
  },

  async modifyPhoto(id, photoModified) {
    const query = `UPDATE photo SET
            galery_id = $1,
            content = $2,
            is_active = $3,
            updated_at = NOW()
            WHERE id = $4`;
    const values = [photoModified.galery_id, photoModified.content, photoModified.is_active, id];
    logger(values);
    return datamapperUtil.executeQuery(query, values);
  },

  async modifyPhotoPhoto(id, image) {
    const query = `UPDATE photo SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2
            RETURNING photo_url`;
    const values = [image, id];

    return datamapperUtil.executeQuery(query, values);
  },

  async deletePhoto(id) {
    const query = 'DELETE FROM photo WHERE id = $1';
    const values = [id];

    return datamapperUtil.executeQuery(query, values);
  },
};

export default photoDatamapper;
