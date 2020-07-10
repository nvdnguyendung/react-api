import React, { Component } from "react";

export class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-warning">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
          <strong>404-Không tìm thấy trang</strong>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
