const User = require("../models/user.model");

exports.findAll = async function (req, res) {
  try {
    const users = await User.findAll();
    res.json({
      success: true,
      data: users,
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
    const newUser = new User(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      throw "Please provide all required field";
    }
    const userId = await User.create(newUser);

    res.json({
      success: true,
      message: "User added successfully!",
      data: userId,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
