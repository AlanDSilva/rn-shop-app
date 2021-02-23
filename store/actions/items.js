import axios from "axios";

export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ITEMS = "SET_ITEMS";
export const CREATE_ITEM = "CREATE_ITEM";

// const baseUrl = "http://192.168.43.141:3003/api/items";
const baseUrl = "http://172.20.10.2:3000/api/items";

export const fetchItems = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(baseUrl);
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

    console.log("Postform: ", postForm);
    // ------
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

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId: itemId };
};
