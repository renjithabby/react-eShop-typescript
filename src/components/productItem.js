/** @jsx jsx */
import { useContext } from "react";
import PropTypes from "prop-types";
import FavouriteBtn from "./favouriteBtn";
import Button from "./button";
import { ApplicationContext } from "../contexts/applicationContext";
import { css, jsx } from "@emotion/core";

const itemStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  align-items: center;
  padding: 1rem;
  > span {
    padding-top: 1rem;
  }
`;
const actionWrapperStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProuctItem = ({
  id,
  imageUrl,
  name,
  price,
  isFavourite,
  inBasket,
  showAdd,
  showRemove,
}) => {
  const { toggleFavourite, addToBasket, removeFromBasket } = useContext(
    ApplicationContext
  );
  return (
    <div css={itemStyle}>
      <img src={imageUrl} alt="product" />
      <span>{name}</span>
      <span>{price}</span>
      <div css={actionWrapperStyle}>
        <FavouriteBtn
          isFavourite={isFavourite}
          handleBtnClick={() => toggleFavourite(id)}
        />
        {showAdd && (
          <Button
            disabled={inBasket}
            btnText="Add"
            handleBtnClick={() => addToBasket(id)}
          />
        )}

        {showRemove && (
          <Button
            disabled={!inBasket}
            btnText="Remove"
            handleBtnClick={() => removeFromBasket(id)}
          />
        )}
      </div>
    </div>
  );
};

export default ProuctItem;

ProuctItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool,
  inBasket: PropTypes.bool,
  showAdd: PropTypes.bool,
  showRemove: PropTypes.bool,
};

ProuctItem.defaultProps = {
  imageUrl:
    "http://mysite.weebly.com/uploads/2/0/2/8/20281409/s238965604388839654_p2_i1_w207.jpeg",
};
