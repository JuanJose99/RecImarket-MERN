const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const auth = require("./auth/main_auth");
require("./database");

const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middelwares
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//     origin:'https://app-recimarket-front.herokuapp.com'

//routes
app.use("/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));
app.use(auth);

module.exports = app;
