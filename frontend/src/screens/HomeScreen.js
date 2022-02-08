import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
// import products from "../products";

import { listProducts } from "../actions/productActions";

// value - 12 (Small Screen - single product (take full 12))
// value - 6 (Medium Screen - 2 product)

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h3>Error.. {error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
