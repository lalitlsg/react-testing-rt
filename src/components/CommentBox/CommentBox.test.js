import { mount } from "enzyme"; // using mount here just to see how `mount` works, but here `shallow` can also be use;
import CommentBox from "./CommentBox";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

test("should render textarea and button", () => {
  expect(wrapper.find("textarea").length).toBe(1);
  expect(wrapper.find("button").length).toBe(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", { target: { value: "lalit" } });
    wrapper.update();
  });

  test("should have textarea where user can type", () => {
    expect(wrapper.find("textarea").prop("value")).toBe("lalit");
  });

  test("should clear the textarea when form is submit", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toBe("");
  });
});
