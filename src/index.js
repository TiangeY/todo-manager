import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //keke
import App from "./App";
import store from "./store"; //keke

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// reducer 怎么分
// double click to change todo list
// css
// click outside disappear todoOption