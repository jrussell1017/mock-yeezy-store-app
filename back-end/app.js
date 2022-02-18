// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/products", productController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
