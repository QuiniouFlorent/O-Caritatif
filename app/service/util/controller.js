const controllerUtil = { 
    manageResponse(error, result, res, next) {

    if(error) {
        next(error);
    } else {
        res.json(result);
    }
 }
};

export default controllerUtil;