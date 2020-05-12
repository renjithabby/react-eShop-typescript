import React from "react";
import { ProductItemType } from "../components/productItem";

export interface IContext {
  state: {
    products: Array<ProductItemType>;
  };
  toggleFavourite: (id: string) => void;
  addToBasket: (id: string) => void;
  removeFromBasket: (id: string) => void;
  addProducts: (products: Array<ProductItemType>) => void;
}
interface IProps {
  children: React.ReactNode;
}
type AppState = { products: Array<ProductItemType> };
type Action =
  | {
      type: "ACTION_ADD_PRODUCTS";
      payload: { products: Array<ProductItemType> };
    }
  | { type: "ACTION_TOGGLE_FAVOURITE"; payload: { id: string } }
  | { type: "ACTION_ADD_TO_BASKET"; payload: { id: string } }
  | { type: "ACTION_REMOVE_FROM_BASKET"; payload: { id: string } };

const initialState = {
  products: [],
};
const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE";
const ACTION_ADD_TO_BASKET = "ACTION_ADD_TO_BASKET";
const ACTION_ADD_PRODUCTS = "ACTION_ADD_PRODUCTS";
const ACTION_REMOVE_FROM_BASKET = "ACTION_REMOVE_FROM_BASKET";
const BASKET_ACTION_ADD = "ADD";
const BASKET_ACTION_REMOVE = "REMOVE";

const toggleFavourite = (state: AppState, productId: string): AppState => {
  const newProducts = [...state.products];
  const product = newProducts.find(({ id }) => id === productId);
  if (product) {
    product.isFavourite = !product.isFavourite;
  }
  return { ...state, products: newProducts };
};
const addOrRemoveBasketItem = (
  state: AppState,
  productId: string,
  action: string
): AppState => {
  if (action !== BASKET_ACTION_ADD && action !== BASKET_ACTION_REMOVE) {
    return state;
  }
  const newProducts = [...state.products];
  const product = newProducts.find(({ id }) => id === productId);
  if (product) {
    product.inBasket = false;
    if (action === BASKET_ACTION_ADD) {
      product.inBasket = true;
    }
  }
  return { ...state, products: newProducts };
};

const applicationReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ACTION_ADD_PRODUCTS: {
      const { products } = action.payload;
      const newState = { ...state, products: [...state.products, ...products] };
      return newState;
    }
    case ACTION_TOGGLE_FAVOURITE: {
      const { id } = action.payload;
      return toggleFavourite(state, id);
    }
    case ACTION_ADD_TO_BASKET: {
      const { id } = action.payload;
      return addOrRemoveBasketItem(state, id, BASKET_ACTION_ADD);
    }

    case ACTION_REMOVE_FROM_BASKET: {
      const { id } = action.payload;
      return addOrRemoveBasketItem(state, id, BASKET_ACTION_REMOVE);
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
};

export const ApplicationContext = React.createContext<IContext | {}>({});

export const ApplicationProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(applicationReducer, initialState);
  const toggleFavourite = (id: string): void => {
    dispatch({ type: ACTION_TOGGLE_FAVOURITE, payload: { id } });
  };
  const addToBasket = (id: string): void => {
    dispatch({ type: ACTION_ADD_TO_BASKET, payload: { id } });
  };
  const removeFromBasket = (id: string): void => {
    dispatch({ type: ACTION_REMOVE_FROM_BASKET, payload: { id } });
  };
  const addProducts = (products: Array<ProductItemType>): void => {
    dispatch({ type: ACTION_ADD_PRODUCTS, payload: { products } });
  };
  const value = {
    state,
    toggleFavourite,
    addToBasket,
    removeFromBasket,
    addProducts,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};
