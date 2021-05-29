import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
