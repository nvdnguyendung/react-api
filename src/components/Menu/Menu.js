import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var menus = [
  {
    name: "Trang chủ",
    exact: true,
    to: "/",
  },
  {
    name: "Quản lý sản phẩm",
    exact: false,
    to: "/product-list",
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var activeClass = match ? "active" : "";
        return (
          <li className={activeClass}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    ></Route>
  );
};

export class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">API</a>
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </div>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
