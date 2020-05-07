import React from "react";

const initialState = {
  products: [],
  favourites: [],
  basket: [],
};

const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE";
const ACTION_ADD_TO_BASKET = "ACTION_ADD_TO_BASKET";
const ACTION_ADD_PRODUCTS = "ACTION_ADD_PRODUCTS";
const ACTION_REMOVE_FROM_BASKET = "ACTION_REMOVE_FROM_BASKET";
const BASKET_ACTION_ADD = "ADD";
const BASKET_ACTION_REMOVE = "REMOVE";

const toggleFavourite = (state, productId) => {
  const newProducts = [...state.products];
  const product = newProducts.find(({ id }) => id === productId);
  product.isFavourite = !product.isFavourite;
  return { ...state, products: newProducts };
};

const addOrRemoveBasketItem = (state, productId, action) => {
  if (action !== BASKET_ACTION_ADD && action !== BASKET_ACTION_REMOVE) {
    return state;
  }

  const newProducts = [...state.products];
  const product = newProducts.find(({ id }) => id === productId);
  product.inBasket = false;

  if (action === BASKET_ACTION_ADD) {
    product.inBasket = true;
  }

  return { ...state, products: newProducts };
};

const applicationReducer = (state, action) => {
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
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const ApplicationContext = React.createContext();

export const ApplicationProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(applicationReducer, initialState);
  const toggleFavourite = (id) => {
    dispatch({ type: ACTION_TOGGLE_FAVOURITE, payload: { id } });
  };
  const addToBasket = (id) => {
    dispatch({ type: ACTION_ADD_TO_BASKET, payload: { id } });
  };
  const removeFromBasket = (id) => {
    dispatch({ type: ACTION_REMOVE_FROM_BASKET, payload: { id } });
  };
  const addProducts = (products) => {
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
