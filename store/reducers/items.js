import ITEMS from "../../data/dummy-data";
import { DELETE_ITEM, SET_ITEMS } from "../actions/items";

const initialState = {
  availableItems: ITEMS,
  userItems: ITEMS.filter((item) => item.user.id === "u1"),
};

export default (state = initialState, action) => {
  console.log();
  switch (action.type) {
    case DELETE_ITEM:
      console.log("Deleting");
      return {
        userItems: state.userItems.filter((item) => item.id !== action.itemId),
        availableItems: state.availableItems.filter(
          (item) => item.id !== action.itemId
        ),
      };
    case SET_ITEMS:
      console.log("Fetching items");
      return {
        availableItems: action.items,
      };
  }
  return state;
};
