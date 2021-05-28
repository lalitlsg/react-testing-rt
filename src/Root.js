import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const Root = ({ children }) => {
  return (
    <Provider store={createStore(reducers, {}, composeWithDevTools())}>
      {children}
    </Provider>
  );
};

export default Root;
