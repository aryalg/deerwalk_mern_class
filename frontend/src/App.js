import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <h1>Welcome to Deerwalk E-commerce site</h1>
      <Header></Header>

      <main>
        <Container>
          <h1>Welcome to MERN E-Commerce</h1>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
};

export default App;
