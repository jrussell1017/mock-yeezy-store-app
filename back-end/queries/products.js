const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getOneProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM products WHERE id=$1", id);
    return product;
  } catch (error) {
    return error;
  }
};

const createNewProduct = async (product) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, description, featured, image, price, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        product.name,
        product.description,
        product.featured,
        product.image,
        product.price,
        product.rating,
      ]
    );
    return newProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
};
