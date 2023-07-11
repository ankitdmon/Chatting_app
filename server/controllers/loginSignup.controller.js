const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../helpers/responses");
const User = require("../models/users");

exports.register = async (req, res) => {
  try {
    let {
      userName,
      fullName,
      email,
      mobile,
      dob,
      gender,
      profilePic,
      coverPic,
      password,
    } = req.body;
    if (!userName || !fullName || !mobile || !gender) {
      return failResponse(
        req,
        res,
        "Please enter required data (userName && fullName && mobile && gender)!!"
      );
    }
    return successResponse(req, res, req.body);
  } catch (error) {
    return errorResponse(req, res, error);
  }
};
