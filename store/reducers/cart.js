import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import items from "./items";
const initialState = {
  items: {},
  sum: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Adding to cart");
      const addedItem = action.item;
      const price = addedItem.price;
      const title = addedItem.title;

      if (!state.items[addedItem.id]) {
        const newCartItem = new CartItem(price, title);
        return {
          items: { ...state.items, [addedItem.id]: newCartItem },
          sum: state.sum + price,
        };
      }

    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.itemId];
      const updatedCartItems = { ...state.items };
      delete updatedCartItems[action.itemId];
      return {
        ...state,
        items: updatedCartItems,
        sum: state.sum - selectedItem.price,
      };
  }

  return state;
};
