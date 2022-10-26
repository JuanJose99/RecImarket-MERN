const Product = require("../models/product");

async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    await product.save();
    res.json({ status: "Product add" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { name, description, price } = req.body;
    const newProduct = { name, description, price };
    await Product.findByIdAndUpdate(req.params.id, newProduct);
    res.json({ status: "Product update" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ status: "Product remove" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message ? error.message : "Ha ocurrido un error",
    });
  }
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};