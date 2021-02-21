import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

const saveDataToStorage = (token, username, name) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({ token: token, username: username, name: name })
  );
};

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const authenticate = (token, username, name) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      token: token,
      username: username,
      name: name,
    });
  };
};

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
      saveDataToStorage(resData.token, resData.username, resData.name);
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
      saveDataToStorage(resData.token, resData.username, resData.name);
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem("userData");
    dispatch({ type: LOGOUT });
  };
};
