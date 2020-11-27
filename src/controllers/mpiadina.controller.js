const Mpiadina = require("../models/mpiadina.model");

exports.findAll = async function (req, res) {
  try {
    const allMpiadina = await Mpiadina.findAll();
    res.json({
      success: true,
      data: allMpiadina,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

exports.create = async function (req, res) {
  try {
    const newMpiadina = new Mpiadina(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      throw "Please provide all required field";
    }
    const mpiadinaId = await Mpiadina.create(newMpiadina);

    res.json({
      success: true,
      message: "Mpiadina added successfully!",
      data: mpiadinaId,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

exports.findById = async function (req, res) {
  try {
    const mpiadina = await Mpiadina.findById(req.params.id);
    console.log(mpiadina);
    if (!mpiadina) {
      throw `Mpiadina with id ${req.params.id} not found`;
    }

    res.json({
      success: true,
      data: mpiadina,
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
    const mpiadinaExists = await Mpiadina.findById(req.params.id);

    if (!mpiadinaExists) {
      throw `Mpiadina with id ${req.params.id} does not exists`;
    }

    const mpiadina = await Mpiadina.update(req.params.id, req.body);

    res.json({
      success: true,
      data: mpiadina,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

exports.delete = async function (req, res) {
  try {
    const mpiadinaExists = await Mpiadina.findById(req.params.id);

    if (!mpiadinaExists) {
      throw `Mpiadina with id ${req.params.id} does not exists`;
    }

    const mpiadina = await Mpiadina.delete(req.params.id);
    res.json({
      success: true,
      data: mpiadina,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
