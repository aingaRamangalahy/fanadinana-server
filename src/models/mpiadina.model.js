const dbConn = require("../../config/db");

const Mpiadina = function (mpiadina) {
  this.anarana = mpiadina.anarana;
  this.fiangonana = mpiadina.fiangonana;
  this.foibe_fanadinana = mpiadina.foibe_fanadinana;
  this.toerana_nianarana = mpiadina.toerana_nianarana;
  this.kilasy = mpiadina.kilasy;
};

Mpiadina.create = function (newMpiadina) {
  return new Promise(function (resolve, reject) {
    dbConn.query(
      "INSERT INTO mpiadina set ?",
      newMpiadina,
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        } else {
          console.log(res);
          return resolve(res);
        }
      }
    );
  });
};

Mpiadina.findById = function (id) {
  return new Promise(function (resolve, reject) {
    dbConn.query(
      "Select * from mpiadina where id_mpiadina = ? ",
      id,
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

Mpiadina.findAll = function () {
  return new Promise(function (resolve, reject) {
    dbConn.query("Select * from mpiadina ", function (err, res) {
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

Mpiadina.update = function (id, mpiadina) {
  return new Promise(function (resolve, reject) {
    dbConn.query(
      "UPDATE mpiadina SET anarana=?,fiangonana=?,foibe_fanadinana=?,toerana_nianarana=?,kilasy=? WHERE id_mpiadina = ?",
      [
        mpiadina.anarana,
        mpiadina.fiangonana,
        mpiadina.foibe_fanadinana,
        mpiadina.toerana_nianarana,
        mpiadina.kilasy,
        id,
      ],
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

Mpiadina.delete = function (id) {
  return new Promise(function (resolve, reject) {
    dbConn.query(
      "DELETE FROM mpiadina WHERE id_mpiadina = ?",
      [id],
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

module.exports = Mpiadina;
