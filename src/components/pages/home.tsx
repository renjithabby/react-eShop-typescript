/** @jsx jsx */
import { useContext } from "react";
import ProductList from "../productList";
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
const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const {
    state: { products },
  } = useContext(ApplicationContext) as IContext;

  return (
    <div>
      <div css={wrapperStyle}>
        <ProductList products={products} showAdd={true}></ProductList>
      </div>
    </div>
  );
};

export default Home;
