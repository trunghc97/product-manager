import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Quản lý sản phẩm</h1>
          <p className="lead">Su dung reactJS & Rails</p>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}
