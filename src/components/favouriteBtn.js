/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { css, jsx } from "@emotion/core";

const iconBaseStyle = css`
  color: red;
  align-item: center;
  width: 3rem;
  height: 100%;
`;

const buttonStyle = css`
  background: none;
  border: none;
`;

const FavouriteBtn = ({ isFavourite, handleBtnClick }) => {
  return (
    <button css={buttonStyle} onClick={() => handleBtnClick()}>
      {isFavourite ? (
        <FaHeart css={iconBaseStyle} />
      ) : (
        <FaRegHeart css={iconBaseStyle} />
      )}
    </button>
  );
};

export default FavouriteBtn;

FavouriteBtn.propTypes = {
  isFilled: PropTypes.bool,
  handleBtnClick: PropTypes.func.isRequired,
};

FavouriteBtn.defaultProps = {
  isFilled: false,
};
