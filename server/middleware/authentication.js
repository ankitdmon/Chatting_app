const jwt = require("jsonwebtoken");
const { errorResponse } = require("../helpers/responses");
const User = require("../models/users");

export function authenticateToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(
      req.token,
      process.env.AUTH_TOKEN_SECRET,
      async (err, authData) => {
        if (err) {
          return errorResponse(
            req,
            res,
            "TokenVerificationFailed",
            "authFailed",
            403
          );
        } else {
          try {
            const user = await User.findById(authData.user._id);
            if (!user) {
              return errorResponse(req, res, "UserNotExist", "authFailed", 403);
            }
            if (user.isDeleted) {
              return errorResponse(req, res, "UserDeleted", "authFailed", 403);
            }
            // Update user or session data if needed
            req.user = user; // authData.user
            req.session = authData.session; // Assuming session data is included in the token
            next();
          } catch (error) {
            return errorResponse(req, res, "ServerError", "authFailed", 500);
          }
        }
      }
    );
  } else {
    return errorResponse(req, res, "NoBearerToken", "authFailed");
  }
}
