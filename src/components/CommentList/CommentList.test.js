import { mount } from "enzyme";
import CommentList from "./CommentList";
import Root from "../../Root";

let wrapper;
const initialState = {
  comments: ["nice", "good"],
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

test("should have LI elements equal to no of comments", () => {
  expect(wrapper.find("li").length).toBe(initialState.comments.length);
});

test("should contain text inside LI elements", () => {
  expect(wrapper.render().text()).toContain(initialState.comments[0]);
  expect(wrapper.render().text()).toContain(initialState.comments[1]);
});
