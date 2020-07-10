import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiCaller from "../../utils/apiCaller";
import { matchPath } from "react-router-dom";

export class ProductActionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      txtName: "",
      txtPrice: 200,
      chkStatus: true,
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checker : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkStatus } = this.state;
    var { history } = this.props;
    apiCaller("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: chkStatus,
    }).then((res) => {
      history.goBack();
    });
  };

  render() {
    var { txtName, txtPrice, chkStatus } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form action="" method="POST" role="form" onSubmit={this.onSubmit}>
          <legend>Form title</legend>

          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              onChange={this.onChange}
              value={txtName}
            />
          </div>

          <div className="form-group">
            <label>Giá</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              onChange={this.onChange}
              value={txtPrice}
            />
          </div>

          <div className="form-group">
            <label>Trạng thái</label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkStatus"
                onChange={this.onChange}
                value={chkStatus}
              />
              Còn hàng
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
          <Link to="/" className="btn btn-danger">
            Trở lại
          </Link>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
