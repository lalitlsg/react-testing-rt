import { FETCH_COMMENTS, SAVE_COMMENTS } from "../actions/types";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.map((d) => d.name);
      return [...state, ...comments];
    default:
      return state;
  }
};

export default commentsReducer;
