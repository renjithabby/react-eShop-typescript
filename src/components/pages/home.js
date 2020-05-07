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
const Home = () => {
  const {
    state: { products },
  } = useContext(ApplicationContext);

  return (
    <div>
      <div css={wrapperStyle}>
        <ProductList products={products} showAdd={true}></ProductList>
      </div>
    </div>
  );
};

export default Home;
