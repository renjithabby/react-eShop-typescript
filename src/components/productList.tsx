import React from "react";
import ProductItem, { ProductItemType } from "./productItem";
type Props = {
  products: Array<ProductItemType>;
  showAdd?: boolean;
  showRemove?: boolean;
};

const ProductList: React.FunctionComponent<Props> = ({
  products = [],
  showAdd = false,
  showRemove = false,
}) => {
  return (
    <React.Fragment>
      {products.map((item) => (
        <ProductItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          isFavourite={item.isFavourite}
          inBasket={item.inBasket}
          showAdd={showAdd}
          showRemove={showRemove}
        />
      ))}
    </React.Fragment>
  );
};

export default ProductList;
