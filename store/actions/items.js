import axios from "axios";

export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ITEMS = "SET_ITEMS";

export const fetchItems = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3003/api/items");
    const resData = response.data;
    dispatch({ type: SET_ITEMS, items: resData });
  };
};

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId };
};
