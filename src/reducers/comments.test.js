import { SAVE_COMMENTS } from "../actions/types";
import commentsReducer from "./comments";

test("should handle action of type SAVE_COMMENTS", () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: "congrats",
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["congrats"]);
});

test("should handle unknown type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
