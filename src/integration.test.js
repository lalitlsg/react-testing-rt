import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";
import Root from "./Root";
import CommentList from "./components/CommentList/CommentList";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/users", {
    status: 200,
    response: [{ name: "nice" }, { name: "good" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

test("should fetch the comments and render it", (done) => {
  const wrapper = mount(
    <Root>
      <CommentList />
    </Root>
  );

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toBe(2);
    done();
  });
});
