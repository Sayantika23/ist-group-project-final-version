import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "./App";
import Tickets from "./components/tickets";
import Login from "./components/login";
import Store from "./components/store";
import App1 from "./components/App1";
import ShoppingCart from "./components/shoppingCart";
import Ranking from "./components/ranking";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/App1" component={App1} />
      <Route path="/login" component={Login} />
      <Route path="/store" component={Store} />
      <Route path="/shoppingCart" component={ShoppingCart} />
      <Route path="/ranking" component={Ranking} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

