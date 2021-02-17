import ADD_TO_CART from "../actions/cart";
import CartItem from "../../models/cart-item";
const initialState = {
  items: {},
  sum: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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
  }
  return state;
};
