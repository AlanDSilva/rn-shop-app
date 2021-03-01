import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

const baseUrl = "https://afternoon-atoll-14172.herokuapp.com/api";

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
      const response = await axios.post(`${baseUrl}/users`, {
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
      throw err.response;
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
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
      throw err.response;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("userData");
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };
};
