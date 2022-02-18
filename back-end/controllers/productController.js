const express = require("express");
const products = express.Router();
const {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products.js");

// GET ALL PRODUCTS
products.get("/", async (req, res) => {
  allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// GET ONE PRODUCT
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getOneProduct(id);

  if (product.id) {
    res.status(200).json(product);
  } else {
    res.status(500).json({ error: "Product not found." });
  }
});

// CREATE NEW PRODUCT
products.post("/", async (req, res) => {
  const { body } = req;
  try {
    const createdProduct = await createNewProduct(body);
    
    if (createdProduct.id) {
      res.status(200).json(createdProduct);
    } else {
      res.status(500).json({ error: "Product creation error." });
    }
  } catch (err) {
    console.log(err);
  }
});

// DELETE PRODUCT
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  const allProducts = await getAllProducts();

  if (deletedProduct.id) {
    res.status(200).json(allProducts);
  } else {
    res.status(404).json({ error: "Product was not found." });
  }
});

// UPDATE PRODUCT
products.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedProduct = await updateProduct(id, body);

  if (updatedProduct.id) {
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ error: "Product was not found." });
  }
});

module.exports = products;
