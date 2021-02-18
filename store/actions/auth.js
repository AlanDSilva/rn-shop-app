import axios from "axios";

export const SIGNUP = "SIGNUP";

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
    } catch (err) {
      console.log(err.response.data.error);
    }

    // dispacth({type: SIGNUP})
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
    } catch (err) {
      console.log(err.response.data.error);
    }

    // dispacth({type: SIGNUP})
  };
};
