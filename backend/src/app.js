const express = require("express");
const morgan = require("morgan");
require("./database");

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middelwares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/products", require("./routes/product"));
app.use("/auth", require("./routes/auth"));

module.exports = app;
