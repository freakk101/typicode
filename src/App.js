import React, { Component } from "react";
import Master from "./component/Master";
import Details from "./component/Details.js";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Master />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
