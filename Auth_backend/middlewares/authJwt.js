const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models")
const User = db.user

verifyToken = (req, res, next) => {
  const bearerToken = req.get('Authorization');
  let token;
  if (bearerToken) {
    token = bearerToken.split(' ')[1];
  }

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.perm = decoded.perm;
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).then(user => {
    if (user.role === "admin") {
          next();
          return;
    }
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;