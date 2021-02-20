import axios from "axios";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (username, name, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3003/api/users", {
        username: username,
        name: name,
        password: password,
      });
      const resData = response.data;
      console.log(resData);
      dispatch({
        type: SIGNUP,
        token: resData.token,
        username: resData.username,
        name: resData.name,
      });
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3003/api/login", {
        username: username,
        password: password,
      });
      const resData = response.data;
      console.log(resData);
      dispatch({
        type: LOGIN,
        token: resData.token,
        username: resData.username,
        name: resData.name,
      });
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};
