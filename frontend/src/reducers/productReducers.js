import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  // if (action.type === PRODUCT_LIST_REQUEST) {
  //   // Do something
  // } else if (action.type === PRODUCT_LIST_SUCCESS) {
  //   //
  // } else if (action.type === PRODUCT_LIST_FAIL) {
  //   // failed
  // } else {
  //   // return same state
  // }

  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
