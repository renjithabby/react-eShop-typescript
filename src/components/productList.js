import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./productItem";

const ProductList = ({ products, showAdd, showRemove }) => {
  return products.map((item) => (
    <ProductItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      isFavourite={item.isFavourite}
      inBasket={item.inBasket}
      showAdd={showAdd}
      showRemove={showRemove}
    />
  ));
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
  showAdd: PropTypes.bool,
  showRemove: PropTypes.bool,
};

ProductList.defaultProps = {
  products: [],
  showAdd: false,
  showRemove: false,
};
