/** @jsx jsx */
import { useContext } from "react";
import ProductList from "../productList";
import { ProductItemType } from "../productItem";
import { RouteComponentProps } from "@reach/router";
import {
  ApplicationContext,
  IContext,
} from "../../contexts/applicationContext";
import { css, jsx } from "@emotion/core";
import { pageGridStyle } from "../helpers/cssHelpers";

const wrapperStyle = css`
  ${pageGridStyle}
`;
const getFavouriteProducts = (): Array<ProductItemType> => {
  const {
    state: { products },
  } = useContext(ApplicationContext) as IContext;
  return products.filter(({ isFavourite }) => isFavourite);
};

const Favourites: React.FunctionComponent<RouteComponentProps> = () => {
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
