import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  AUTHENTICATE,
  SET_DID_TRY_AL,
} from "../actions/auth";

const initialState = {
  token: null,
  username: null,
  name: null,
  didTryAutoLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        username: action.username,
        name: action.name,
        didTryAutoLogin: true,
      };
    case LOGIN:
      return {
        token: action.token,
        username: action.username,
        name: action.name,
        didTryAutoLogin: true,
      };
    case SIGNUP:
      return {
        token: action.token,
        username: action.username,
        name: action.name,
        didTryAutoLogin: true,
      };
    case LOGOUT:
      return initialState;
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    default:
      return state;
  }
};
