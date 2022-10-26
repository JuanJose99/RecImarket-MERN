const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");
const product = require("../controllers/product");

router.get("/users", product.getProducts);

router.post("/login", auth.login);

router.post("/signup", auth.signup);

module.exports = router;
