const dbConn = require("../../config/db");

const User = function (user) {
  this.login = user.login;
  this.password = user.password;
};

User.login = function (login, pwd, result) {
  dbConn.query("Select * from user where login = ?, password=? ", login, pwd, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.create = function (newUser, result) {
  dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

User.findById = function (id, result) {
  dbConn.query("Select * from user where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.findAll = function (result) {
  dbConn.query("Select * from user ", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

module.exports = User;
