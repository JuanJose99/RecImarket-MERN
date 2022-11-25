const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const auth = require("./auth/main_auth");
require("./database");

const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middelwares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//routes
app.use("/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/product"));
app.use(auth);

module.exports = app;
