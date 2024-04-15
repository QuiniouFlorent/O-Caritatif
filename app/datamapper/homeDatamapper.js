import debug from 'debug';
const logger = debug('app:datamapper');
import datamapperUtil from '../service/util/datamapper.js';

const homeDatamapper = {
    
    async findLastNews(){
        const query = 'SELECT * FROM view_last_news';
        
        return datamapperUtil.executeQuery(query);
    },

    async findNextEvent(){
        const query = 'SELECT * FROM view_next_event';
        
        return datamapperUtil.executeQuery(query);
    }
}

logger('Home datamapper initialized');
export default homeDatamapper;