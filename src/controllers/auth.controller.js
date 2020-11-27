const User = require("../models/user.model");

exports.login = async function (req, res) {
  try {
    const data = await User.login(req.body)
    console.log(data)

    if (!data.length) {
        throw "invalid credentials"
    }

    res.json({
        success: true,
        data,
    })

  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};
