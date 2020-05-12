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

const getBasketProducts = (): Array<ProductItemType> => {
  const {
    state: { products },
  } = useContext(ApplicationContext) as IContext;
  return products.filter(({ inBasket }) => inBasket);
};

const Basket: React.FunctionComponent<RouteComponentProps> = () => {
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
