import { AUTH_TOGGLE, FETCH_COMMENTS, SAVE_COMMENTS } from "./types";
import axios from "axios";

export const saveComments = (comments) => {
  return {
    type: SAVE_COMMENTS,
    payload: comments,
  };
};

export const fetchComments = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data,
    });
  };
};

export const authToggle = (isLoggedIn) => {
  return {
    type: AUTH_TOGGLE,
    payload: isLoggedIn,
  };
};
