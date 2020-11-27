const dbConn = require("../../config/db");

const Note = function (note) {
  this.math = note.math;
  this.science = note.science;
  this.malagasy = note.malagasy;
  this.histoire = note.histoire;
  this.date_session = note.date_session;
  this.id_mpiadina = note.id_mpiadina;
};

Note.create = function (newNote, result) {
  dbConn.query("INSERT INTO note set ?", newNote, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Note.update = function (id, note, result) {
  dbConn.query(
    "UPDATE mpiadina SET math=?,science=?,malagasy=?,histoire=?",
    [
      note.math,
      note.science,
      note.malagasy,
      note.histoire,
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

module.exports = Note;
