/** @jsx jsx */
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

type Props = {
  handleBtnClick: () => void;
  isFavourite?: boolean;
};

const FavouriteBtn: React.FunctionComponent<Props> = ({
  isFavourite = false,
  handleBtnClick,
}) => {
  return (
    <button css={buttonStyle} onClick={(): void => handleBtnClick()}>
      {isFavourite ? (
        <FaHeart css={iconBaseStyle} />
      ) : (
        <FaRegHeart css={iconBaseStyle} />
      )}
    </button>
  );
};

export default FavouriteBtn;
