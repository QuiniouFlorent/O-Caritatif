import client from '../../models/client.js';
import APIerror from '../error/APIerror.js';

const datamapperUtil = {
    async executeQuery(query, values) {
        let result ;
        let error;
        try {
         const response = await client.query(query, values);
         result = response.rows;
        } catch (err) {
            error = new APIerror(err, 500);
        }
        return { result, error };
    }
};

export default datamapperUtil;