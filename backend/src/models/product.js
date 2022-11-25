const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  countInStock: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
