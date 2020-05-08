/** @jsx jsx */
import { useContext } from "react";
import ProductList from "../productList";
import { ApplicationContext } from "../../contexts/applicationContext";
import { css, jsx } from "@emotion/core";
import { pageGridStyle } from "../helpers/cssHelpers";

const wrapperStyle = css`
  ${pageGridStyle}
`;
const getFavouriteProducts = () => {
  const {
    state: { products },
  } = useContext(ApplicationContext);
  return products.filter(({ isFavourite }) => isFavourite);
};

const Favourites = () => {
  const products = getFavouriteProducts();
  return (
    <div>
      <div css={wrapperStyle}>
        <ProductList products={products} showAdd={true}></ProductList>
        {products.length === 0 && (
          <p>No items in the favourite list, start adding items </p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
