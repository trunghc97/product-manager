import React, { Component } from 'react';

export default class Errors extends Component {
  render() {
    return (
      <li className="text-danger">
        {this.props.error}
      </li>
    );
  }
}
