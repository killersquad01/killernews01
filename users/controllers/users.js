const User = require('../models/user');
const responseHelper = require('../helpers/response-helper');

exports.createUser = async (req, res, next) => {
    try{
        // do the creating of user here
    }catch(error){
        next(error);
    }
};
