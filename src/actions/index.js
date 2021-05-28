import { SAVE_COMMENTS } from "./types";

export const saveComments = (comments) => {
  return {
    type: SAVE_COMMENTS,
    payload: comments,
  };
};
