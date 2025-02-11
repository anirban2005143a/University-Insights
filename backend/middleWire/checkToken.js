const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWTserect = process.env.JWT_MESSAGE;

const checkToken = (req, res, next) => {
  const jwtToken = req.header("authToken")
  if (!jwtToken) {
    return res.status(400).json({message : "You do not have authentication token" , error : true });
  }
  try {
    const token = jwt.verify(jwtToken, JWTserect);
    req.id = token.id;
    next();
  } catch {
    return res.status(400).json({message: "LOG-OUT! please login for further aproach" ,error : true });
  }
};

module.exports = checkToken;
