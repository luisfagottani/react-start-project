import "./reset.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import appHistory from "./route/AppHistory";

import reducer from "redux/reducer";
import middleware from "redux/middleware";

export const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
