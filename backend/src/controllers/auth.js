const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

async function login(req, res) {
  const { email, password } = req.body;
  let hashedPass = crypto
    .createHash("sha512")
    .update(password)
    .digest("hex");
  try {
    const user = await User.findOne({ email: email, password: hashedPass }, function (err, user) {
      let response = {
        token:null
      }
      if (user) {
        response.token = jwt.sign({
          id: user._id,
          user: user.email
        }, "_recret_",{expiresIn: '12h'})
      }
      res.json(response);
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

async function signup(req, res) {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email: email }).exec();
    if (userExist) {
      return res.json("Ya existe un usuario con estas credenciales");
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.json("Registro exitoso");
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

module.exports = {
  login,
  signup,
};
