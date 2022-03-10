import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // Getting single product from API
  const { data } = await axios.get(
    `http://localhost:4500/api/v1/products/${id}`
  );

  // Dispatch Add to cart (product with some qty)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty,
    },
  });

  // Add it to local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
