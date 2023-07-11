const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../helpers/responses");

exports.register = async (req, res) => {
  try {
    let name = req.body.userName;
    if(name){
        return successResponse(req, res, name);
    }
    return failResponse(req, res, "Please enter name!");
  } catch (error) {
    return errorResponse(req, res, error);
  }
};
