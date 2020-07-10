import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import callApi from "../../utils/apiCaller";

export class ProductListPage extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };
  }
  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
      // console.log(res);
    });
  }
  render() {
    var { products } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product-add" className="btn btn-danger mt-5">
          Create Product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  onDelete = (id) => {
    callApi((`products/1`, "DELETE", null)).then((res) => {
    console.log(id);
    });
  };
}

export default ProductListPage;
