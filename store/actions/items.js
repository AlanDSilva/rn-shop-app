import axios from "axios";

export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ITEMS = "SET_ITEMS";
export const CREATE_ITEM = "CREATE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

const baseUrl = "https://afternoon-atoll-14172.herokuapp.com/api/items";

export const fetchItems = (cat, loc, oPrice, oDate) => {
  console.log(cat, loc, oPrice, oDate);
  const params = {
    oPrice: oPrice,
    oDate: oDate,
    location: loc,
    category: cat,
  };

  return async (dispatch, getState) => {
    const response = await axios.get(baseUrl, { params });
    const resData = response.data;
    console.log("Fetching items");
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
  pickedImage,
  pickedImage2,
  price,
  deliveryType
) => {
  return async (dispatch, getState) => {
    const username = getState().auth.username;
    const name = getState().auth.name;
    const token = `bearer ${getState().auth.token}`;

    // -----
    let postForm = new FormData();
    postForm.append("title", title);
    postForm.append("description", description);
    postForm.append("category", category);
    postForm.append("location", location);
    postForm.append("image", pickedImage);
    postForm.append("image", pickedImage2);
    postForm.append("price", price);
    postForm.append("deliveryType", deliveryType);
    // ------
    const config = {
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    };
    try {
      const response = await axios.post(baseUrl, postForm, config);

      const userId = response.data.user;
      const payload = {
        ...response.data,
        user: { id: userId, name: name, username: username },
      };

      dispatch({ type: CREATE_ITEM, payload: payload });
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};

export const editItem = (
  id,
  title,
  description,
  category,
  location,
  pickedImage,
  pickedImage2,
  price,
  deliveryType
) => {
  return async (dispatch, getState) => {
    const username = getState().auth.username;
    const name = getState().auth.name;
    const token = `bearer ${getState().auth.token}`;

    // -----
    let postForm = new FormData();
    postForm.append("title", title);
    postForm.append("description", description);
    postForm.append("category", category);
    postForm.append("location", location);
    postForm.append("image", pickedImage);
    postForm.append("image", pickedImage2);
    postForm.append("price", price);
    postForm.append("deliveryType", deliveryType);

    console.log("Postform in editing: ", postForm);
    // ------
    const config = {
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    };
    try {
      const response = await axios.put(`${baseUrl}/${id}`, postForm, config);

      const userId = response.data.user;
      const payload = {
        ...response.data,
        user: { id: userId, name: name, username: username },
      };

      dispatch({ type: EDIT_ITEM, payload: payload, itemId: id });
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};

export const deleteItem = (id) => {
  return async (dispatch, getState) => {
    const token = `bearer ${getState().auth.token}`;

    const config = {
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    };

    const response = await axios.delete(`${baseUrl}/${id}`, config);
    console.log(response);

    dispatch({ type: DELETE_ITEM, itemId: id });
  };
};
