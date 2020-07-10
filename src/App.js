import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import route from "./route";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          <div className="container">
            <div className="row">{this.showContentMenu(route)}</div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
