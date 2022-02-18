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

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

const updateProduct = async (id, product) => {
  try {
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, description=$2, featured=$3, image=$4, price=$5, rating=$6 WHERE id=$7 RETURNING *",
      [
        product.name,
        product.description,
        product.featured,
        product.image,
        product.price,
        product.rating,
        id,
      ]
    );
    return updatedProduct;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
