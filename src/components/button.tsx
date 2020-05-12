/** @jsx jsx */
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

type Props = {
  handleBtnClick: () => void;
  disabled?: boolean;
  btnText?: string;
};

const Button: React.FunctionComponent<Props> = ({
  handleBtnClick,
  disabled = false,
  btnText = "",
}) => {
  return (
    <button
      css={buttonStyle}
      disabled={disabled}
      onClick={(): void => {
        handleBtnClick();
      }}
    >
      {btnText}
    </button>
  
  );
};

export default Button;
