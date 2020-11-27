const User = require("../models/user.model");

exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    console.log("controller");
    if (err) {
      res.json({
        success: false,
        message: err,
      });
    }
    console.log("res", user);
    res.json({
      success: true,
      data: user,
    });
  });
};

exports.create = function (req, res) {
  const newUser = new User(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ success: false, message: "Please provide all required field" });
  } else {
    User.create(newUser, function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: err,
        });
      }
      res.json({
        error: false,
        message: "User added successfully!",
        data: user,
      });
    });
  }
};

exports.login = function (req, res) {
  const { login, password } = req.body;
  User.login(login, password, function (err, user) {
    if (err) {
      res.json({
        success: false,
        message: err,
      });
    }
    res.json({
      success: true,
      data: user,
    });
  });
};
