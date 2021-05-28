import { SAVE_COMMENTS } from "../actions/types";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
