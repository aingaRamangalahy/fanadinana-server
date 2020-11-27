const dbConn = require("../../config/db");

const Mpiadina = function (mpiadina) {
  this.anarana = mpiadina.anarana;
  this.fiangonana = mpiadina.fiangonana;
  this.foibe_fanadinana = mpiadina.foibe_fanadinana;
  this.toerana_nianarana = mpiadina.toerana_nianarana;
  this.kilasy = mpiadina.kilasy;
};

Mpiadina.create = function (newMpiadina, result) {
  dbConn.query("INSERT INTO mpiadina set ?", newMpiadina, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Mpiadina.findById = function (id, result) {
  dbConn.query("Select * from mpiadina where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Mpiadina.findAll = function (result) {
  dbConn.query("Select * from mpiadina ", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

Mpiadina.update = function (id, mpiadina, result) {
  dbConn.query(
    "UPDATE mpiadina SET anarana=?,fiangonana=?,foibe_fanadinana=?,toerana_nianarana=?,kilasy=? WHERE id = ?",
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
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Mpiadina.delete = function (id, result) {
  dbConn.query("DELETE FROM mpiadina WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Mpiadina;
