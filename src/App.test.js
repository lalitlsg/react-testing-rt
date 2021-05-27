import { shallow } from "enzyme";
import App from "./App";
import CommentBox from "./components/CommentBox/CommentBox";
import CommentList from "./components/CommentList/CommentList";

test("should contain instance of CommentBox", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toBe(1);
});

test("should contain instance of CommentList", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentList).length).toBe(1);
});
