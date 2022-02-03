import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

// Home route just for testing
app.get("/", (req, res) => {
  res.send("API is Running");
});

// Another Middleware to Handle all routes related to product
app.use("/api/v1/products", productRouter);

// Get Single product with id

app.use(notFound);

app.use(errorHandler);

app.listen(4500, console.log("Server is running on port 4500"));

connectDB();
