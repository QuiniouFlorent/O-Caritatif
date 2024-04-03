const controllerUtil = { 
    manageResponse(error, result, res, next) {

    if(error) {
        next(error);
    } else {
        res.json(result);
    }
 }
};

//const response = await client.query(query, values);
//            const result = !!response.rowCount;
//            return result;

export default controllerUtil;