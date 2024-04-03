
// le constructeur de APIError va être appelé quand on fait new APIError.

class APIerror extends Error {
    constructor( err, code ) {
        super(err);
        this.code = code;
    }
}
export default APIerror;