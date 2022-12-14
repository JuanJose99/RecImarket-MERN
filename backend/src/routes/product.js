const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.get("/", product.getProducts);

router.post("/", product.createProduct);

router.patch("/:id", product.updateProduct);

router.delete("/:id", product.deleteProduct);

router.get("/slug/:slug", product.getProductBySlug);

router.get("/:id", product.getProductById);

module.exports = router;
