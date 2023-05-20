const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user: req.body.name,
    // email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    // role: 'user'
  })
    .then(user => {
      res.status(200).send({ user: user });
    })
    .catch(err => {
      res.status(500).send({ errors: err.message, message: 'Something went wrong!' });
    });
};

exports.signin = (req, res) => {

  User.findOne({
    user: req.body.name
  })
    .then(async user => {
      if (!user) {
        return res.status(401).send({ message: "Invalid name!" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(402).send({
          message: "Invalid password"
        });
      }
      
      const queryToken = {};
     
      /** 2023/5/9 3:30 */
      /** Add more information */
      queryToken.id = user.id;
      queryToken.role = user.role;

      var token = jwt.sign(queryToken, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        user: user,
        accessToken: token
      });

    })
    .catch(err => {
      res.status(500).send({ errors: err.message, message: 'Something went wrong!' });
    });
};
