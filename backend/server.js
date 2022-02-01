import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";

dotenv.config();

const app = express();

app.use(cors());

// Home route just for testing
app.get("/", (req, res) => {
  res.send("API is Running");
});

// Get All Products
app.get("/api/v1/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get Single product with id
app.get("/api/v1/products/:id", async (req, res) => {
  // const product = products.find((p) => p._id === req.params.id);

  const product = await Product.findById(req.params.id);

  res.json(product);
});

app.listen(4500, console.log("Server is running on port 4500"));

connectDB();
