const dbConn = require("../../config/db");

const User = function (user) {
  this.login = user.login;
  this.password = user.password;
};

User.login = function (user) {
  return new Promise(function (resolve, reject) {
    dbConn.query(
      "Select id_user, login from user where login = ? and password=? ",
      [user.login, user.password],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        } else {
          return resolve(res);
        }
      }
    );
  });
};

User.create = function (newUser) {
  return new Promise(function (resolve, reject) {
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
      if (err) {
        console.log("error: ", err);
        return reject(err);
      } else {
        console.log(res);
        return resolve(res);
      }
    });
  });
};

User.findById = function (id, result) {
  return new Promise(function (resolve, reject) {
    dbConn.query("Select * from user where id = ? ", id, function (err, res) {
      if (err) {
        console.log("error: ", err);
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};

User.findAll = function (result) {
  return new Promise(function (resolve, reject) {
    dbConn.query("Select * from user ", function (err, res) {
      if (err) {
        console.log("error: ", err);
        return reject(err);
      } else {
        console.log("employees : ", res);
        return resolve(res);
      }
    });
  });
};

module.exports = User;
