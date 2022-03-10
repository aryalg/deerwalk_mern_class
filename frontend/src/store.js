import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import {
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: singleProductReducer,
});

const initialState = {};
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
