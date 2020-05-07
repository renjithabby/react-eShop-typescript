/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

const buttonStyle = css`
  color: white;
  background-color: green;
  text-align: center;
  width: 7rem;
  border: 1px solid black;
  cursor: pointer;
  &:disabled {
    color: black;
    background-color: grey;
    cursor: inherit;
  }
`;

const Button = ({ handleBtnClick, disabled, btnText }) => {
  return (
    <button
      css={buttonStyle}
      disabled={disabled}
      onClick={() => {
        handleBtnClick();
      }}
    >
      {btnText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  btnText: PropTypes.string,
};

Button.defaultProps = {
  btnText: "",
  disabled: false,
};
