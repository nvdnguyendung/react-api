import React, { Component } from "react";

import ProductItem from "../ProductItem/ProductItem";

export class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">List Products</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="center">STT</th>
                <th className="center">Mã</th>
                <th className="center">Tên</th>
                <th className="center">Giá</th>
                <th className="center">Trạng thái</th>
                <th className="center">Hành động</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
