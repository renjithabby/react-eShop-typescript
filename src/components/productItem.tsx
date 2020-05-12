/** @jsx jsx */
import { useContext } from "react";
import FavouriteBtn from "./favouriteBtn";
import Button from "./button";
import { ApplicationContext, IContext } from "../contexts/applicationContext";
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

export type ProductItemType = {
  id: string;
  key: string;
  imageUrl?: string;
  name: string;
  price: string;
  isFavourite: boolean;
  inBasket: boolean;
  showAdd: boolean;
  showRemove: boolean;
};

const ProuctItem: React.FunctionComponent<ProductItemType> = ({
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
  ) as IContext;
  return (
    <div css={itemStyle}>
      <img src={imageUrl} alt="product" />
      <span>{name}</span>
      <span>{price}</span>
      <div css={actionWrapperStyle}>
        <FavouriteBtn
          isFavourite={isFavourite}
          handleBtnClick={(): void => toggleFavourite(id)}
        />
        {showAdd && (
          <Button
            disabled={inBasket}
            btnText="Add"
            handleBtnClick={(): void => addToBasket(id)}
          />
        )}

        {showRemove && (
          <Button
            disabled={!inBasket}
            btnText="Remove"
            handleBtnClick={(): void => removeFromBasket(id)}
          />
        )}
      </div>
    </div>
  );
};

export default ProuctItem;

ProuctItem.defaultProps = {
  imageUrl:
    "http://mysite.weebly.com/uploads/2/0/2/8/20281409/s238965604388839654_p2_i1_w207.jpeg",
};
