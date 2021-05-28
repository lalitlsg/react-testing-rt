import { shallow } from "enzyme";
import App from "./App";
import CommentBox from "./components/CommentBox/CommentBox";
import CommentList from "./components/CommentList/CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

test("should contain instance of CommentBox", () => {
  expect(wrapper.find(CommentBox).length).toBe(1);
});

test("should contain instance of CommentList", () => {
  expect(wrapper.find(CommentList).length).toBe(1);
});
