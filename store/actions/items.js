import axios from "axios";

export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ITEMS = "SET_ITEMS";
export const CREATE_ITEM = "CREATE_ITEM";

export const fetchItems = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:3003/api/items");
    const resData = response.data;
    console.log("The fetch data: ", resData);
    console.log("The username: ", getState().auth.username);
    dispatch({
      type: SET_ITEMS,
      items: resData,
      username: getState().auth.username,
    });
  };
};

export const createItem = (
  title,
  description,
  category,
  location,
  image,
  price,
  deliveryType
) => {
  return async (dispatch, getState) => {
    const username = getState().auth.username;
    const name = getState().auth.name;
    const token = `bearer ${getState().auth.token}`;
    const newItem = {
      title: title,
      description: description,
      category: category,
      location: location,
      image: image,
      price: price,
      deliveryType: deliveryType,
    };
    const config = {
      headers: { Authorization: token },
    };
    try {
      const response = await axios.post(
        "http://localhost:3003/api/items",
        newItem,
        config
      );

      const userId = response.data.item.user;
      const payload = {
        ...response.data.item,
        user: { id: userId, name: name, username: username },
      };

      dispatch({ type: CREATE_ITEM, payload: payload });
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId };
};
