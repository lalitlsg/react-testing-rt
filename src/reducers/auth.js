import { AUTH_TOGGLE } from "../actions/types";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
