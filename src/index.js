import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router base='/'>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
