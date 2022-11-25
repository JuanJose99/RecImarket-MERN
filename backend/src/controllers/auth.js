const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

async function login(req, res, next) {
  let hashedpass = crypto.createHash("sha512").update(req.body.password).digest("hex");

  User.findOne(
    { email: req.body.email, password: hashedpass },
    function (err, user) {
      let response = {
        token: null,
      }
      if (user !== null) {
        response.token = jwt.sign(
          {
            id: user._id,
            user: user.user,
          },
          "_recret_",
          { expiresIn: "12h" }
        );
      }
      res.json(response);
    }
  );
}

// async function login(req, res) {
//   const { email, password } = req.body;
//   let hashedPass = crypto
//     .createHash("sha512")
//     .update(password)
//     .digest("hex");
//   try {
//     const user = await User.findOne({ email: email, password: hashedPass }, function (err, user) {
//       let response = {
//         token:null
//       }
//       if (user) {
//         response.token = jwt.sign({
//           id: user._id,
//           user: user.email
//         }, "_recret_",{expiresIn: '12h'})
//       }
//       res.json(response);
//     })
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: error.message ? error.message : "Ha ocurrido un error",
//     });
//   }
// }

async function signup(req, res) {
  try {
    const { name, lastname, password, email, phone } = req.body;
    let hashedpass = crypto.createHash("sha512").update(password).digest("hex");
    const userExist = await User.findOne({ email: email }).exec();
    if (userExist) {
      return res.json("Ya existe un usuario con estas credenciales");
    } else if (!name || !email || !password) {
      return res.json("Falta el nombre / correo / contraseña");
    }
    const usernewpass = {'name':name, 'lastname':lastname,'email':email, 'password':hashedpass, 'phone':phone};
    const newUser = new User(usernewpass);
    await newUser.save();
    res.json("Registro exitoso");
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

// async function signup(req, res) {
//   try {
//     const { email } = req.body;
//     const userExist = await User.findOne({ email: email }).exec();
//     if (userExist) {
//       return res.json("Ya existe un usuario con estas credenciales");
//     }
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.json("Registro exitoso");
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: error.message ? error.message : "Ha ocurrido un error",
//     });
//   }
// }

module.exports = {
  login,
  signup,
};
