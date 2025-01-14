const { StatusCodes } = require("http-status-codes"); 
const jwt = require("jsonwebtoken");
// Middleware function for authentication
async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization; 

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Authentication invalid" });
    }
    // Extract the token from the header
    const token = authHeader.split(" ")[1];

    try {
      const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { username, userid };
      next();
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        msg: "Authentication invalid",
      });
    }

}

// Exporting the authentication middleware for use in other parts of the application
module.exports = authMiddleware;
