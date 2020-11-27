const Note = require("../models/note.model");

exports.create = async function (req, res) {
  try {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      throw "Please provide all required field";
    }

    const note = await Note.create(req.body);
    res.json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

exports.update = async function (req, res) {
  try {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      throw "Please provide all required field";
    }
    //const noteExists = await Mpiadina.findById(req.params.id);

    // if (!mpiadinaExists) {
    //   throw `Mpiadina with id ${req.params.id} does not exists`;
    // }

    const note = await Note.update(req.params.id, req.body);

    res.json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
