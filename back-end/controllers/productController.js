const express = require("express");
const products = express.Router();
const { getAllProducts } = require("../queries/products.js");

// GET ALL PRODUCTS
products.get("/", async (req, res) => {
  allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = products;
