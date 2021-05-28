import { saveComments } from "./";
import { SAVE_COMMENTS } from "./types";

describe("saveComments", () => {
  test("should have correct action type", () => {
    const action = saveComments();
    expect(action.type).toBe(SAVE_COMMENTS);
  });

  test("should have correct payload", () => {
    const action = saveComments("congrats");
    expect(action.payload).toBe("congrats");
  });
});
