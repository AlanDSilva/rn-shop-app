import { LOGIN, SIGNUP } from "../actions/auth";

const initialState = {
  token: null,
  username: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        username: action.username,
        name: action.name,
      };
    case SIGNUP:
      return {
        token: action.token,
        username: action.username,
        name: action.name,
      };
    default:
      return state;
  }
};
