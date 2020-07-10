import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    var statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-danger">
            Sửa
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.onDelete(product.id);
            }}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }

  onDelete = (id) => {
    alert("Bạn có chắc chắn xoá");
    this.props.onDelete(id);
  };
}

export default ProductItem;
