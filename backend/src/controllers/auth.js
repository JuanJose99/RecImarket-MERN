const User = require("../models/auth");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();
    console.log(req.body);
    if (!user) {
      return res.json("El usuario no esta registrado");
    }
    if (password != user.password) {
      return res.json("Contraseña incorrecta");
    }
    res.json(`Bienvenido ${user.name} ${user.lastname}`);
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
