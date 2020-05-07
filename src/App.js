/** @jsx jsx */
import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./components/pages/home";
import Favourites from "./components/pages/favourites";
import Basket from "./components/pages/basket";
import Header from "./components/header";

import {
  ApplicationProvider,
  ApplicationContext,
} from "./contexts/applicationContext";
import productData from "./data/products.json";
import { Global, css, jsx } from "@emotion/core";
import normalize from "normalize.css";

const pageStyle = css`
  margin: 0 auto;
  max-width: 96rem;
  padding: 1rem 1rem;
  @media only screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 1rem 5rem;
  }
`;

const globalStyle = css`
  html {
    font-size: 10px;
  }
  body {
    font-size: 16px;
  }
  h1 {
    font-size: 3.2rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2.08rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.28rem;
  }
  h6 {
    font-size: 1.12rem;
  }
`;

const App = () => {
  const { addProducts } = useContext(ApplicationContext);
  const fetchProducts = () => {
    return Promise.resolve(productData);
  };
  useEffect(() => {
    fetchProducts().then((res) => addProducts(res.products));
  }, []);
  return (
    <React.Fragment>
      <Global styles={[normalize, globalStyle]} />
      <Header />
      <Router css={pageStyle}>
        <Home path="/" />
        <Favourites path="favourites" />
        <Basket path="basket" />
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(
  <ApplicationProvider>
    <App />
  </ApplicationProvider>,
  document.getElementById("root")
);
