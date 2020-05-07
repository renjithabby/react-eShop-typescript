/** @jsx jsx */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductList from "../productList";
import { ApplicationContext } from "../../contexts/applicationContext";
import { css, jsx } from "@emotion/core";
import { pageGridStyle } from "../helpers/cssHelpers";

const wrapperStyle = css`
  ${pageGridStyle}
`;

const getBasketProducts = () => {
  const {
    state: { products },
  } = useContext(ApplicationContext);
  return products.filter(({ inBasket }) => inBasket);
};

const Basket = () => {
  const products = getBasketProducts();
  return (
    <div>
      <div css={wrapperStyle}>
        <ProductList products={products} showRemove={true}></ProductList>
        {products.length === 0 && (
          <p>No items added to basket, start adding items </p>
        )}
      </div>
    </div>
  );
};

export default Basket;
