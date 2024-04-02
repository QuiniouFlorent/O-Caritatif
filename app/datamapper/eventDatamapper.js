import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const eventDatamapper = {
    
    async findAllEvent() {
        const query = 'SELECT * FROM view_all_events';
       
        return datamapperUtil.executeQuery(query);
    },

    async findOneEvent(id) {
        const query = 'SELECT * FROM event WHERE id = $1';
        const values = [id]

        return datamapperUtil.executeQuery(query,values);
    },

    async insertEvent(newEvent, image) {
        const query = `INSERT INTO event
        (title, category, photo_url, description, date, calendar_url, place, author)
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8)`
        const values = [newEvent.title, newEvent.category, image, newEvent.description, newEvent.date, newEvent.calendar_url, newEvent.place, newEvent.author];
        
        return datamapperUtil.executeQuery(query,values);
    },

    async modifyEvent(id, eventModified) {
        const query = `UPDATE event SET
            title = $1,
            category = $2,
            description = $3,
            date = $4,
            calendar_url = $5,
            place = $6,
            updated_at = NOW()
            WHERE id = $7`;
        const values = [eventModified.title, eventModified.category, eventModified.description, eventModified.date, eventModified.calendar_url, eventModified.place, id]
        
        return datamapperUtil.executeQuery(query,values);
    },

    async modifyEventPhoto(id,image) {
        const query = `UPDATE event SET
            photo_url = $1,
            updated_at = NOW()
            WHERE id = $2`;
        const values = [image, id];

        return datamapperUtil.executeQuery(query, values);
    },

    async deleteEvent(id) {
        const query = 'DELETE FROM event WHERE id = $1';
        const values = [id];

        return datamapperUtil.executeQuery(query,values);
    }
}

export default eventDatamapper;