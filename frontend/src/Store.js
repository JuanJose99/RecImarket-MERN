import { createContext, useReducer } from "react";


const initialState = {
    cart: {
        cartItems: [],
    },
};
export const Store = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //Adicionar un producto al carrito
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
