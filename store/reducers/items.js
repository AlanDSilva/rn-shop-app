import {
  DELETE_ITEM,
  SET_ITEMS,
  CREATE_ITEM,
  EDIT_ITEM,
} from "../actions/items";

const initialState = {
  availableItems: [],
  userItems: [],
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
        userItems: action.items.filter(
          (item) => item.user.username === action.username
        ),
        availableItems: action.items,
      };

    case CREATE_ITEM:
      console.log("Creading item with payload: ", action.payload);

      return {
        availableItems: state.availableItems.concat(action.payload),
        userItems: state.userItems.concat(action.payload),
      };

    case EDIT_ITEM:
      console.log("Editing item with payload: ", action.payload);

      return {
        availableItems: state.availableItems
          .filter((item) => item.id !== action.itemId)
          .concat(action.payload),
        userItems: state.userItems
          .filter((item) => item.id !== action.itemId)
          .concat(action.payload),
      };
  }
  return state;
};
