import express from "express";
import Product from "../models/productModel.js";
import catchAsync from "express-async-handler";
import {
  addOneFieldToProduct,
  secondMiddleware,
} from "../middleware/testMiddleware.js";

const router = express.Router();

// @desc      Fetch All Products
// @route     GET /api/v1/products
// @access    public

router.get(
  "/",
  catchAsync(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc      Fetch Single Product
// @route     GET /api/v1/products/:id
// @access    public

router.get(
  "/:id",

  catchAsync(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);

    let product = await Product.findById(req.params.id);

    if (!product) {
      // This the case where product was not found in database
      // return res.status(404).json({ message: "Product not Found" }); - Old Code for Ref
      res.status(404);
      throw new Error("Product Not Found");
    }

    return res.json(product);
  })
);

export default router;
