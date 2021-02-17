import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import _ from "lodash";
const initialState = {
  items: [],
  sum: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Adding to cart");
      const addedItem = action.item;

      if (!state.items.includes(addedItem)) {
        console.log("Does not exist");
        return {
          items: [...state.items, addedItem],
          sum: state.sum + addedItem.price,
        };
      } else {
        console.log("Already exists");
      }
      break;
    case REMOVE_FROM_CART:
      console.log(action.itemId);
      const updatedItems = _.filter(state.items, (o) => o.id !== action.itemId);
      return {
        items: updatedItems,
        sum: 0,
      };
  }

  return state;
};
