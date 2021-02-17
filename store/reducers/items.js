import ITEMS from "../../data/dummy-data";

const initialState = {
  availableItems: ITEMS,
  userItems: [],
};

export default (state = initialState, action) => {
  return state;
};
