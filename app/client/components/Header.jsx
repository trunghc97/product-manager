import React, { Component } from 'react';
import SideBarContainer from '../containers/SideBarContainer'

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <SideBarContainer
          current_user = {this.props.current_user}
          handleDrawerOpen = {this.props.handleDrawerOpen}
          handleDrawerClose = {this.props.handleDrawerClose}/>
        <div className="container">
          <h1 className="display-3">Product Manager</h1>
          <p className="lead">Using ReactJS & Rails</p>
          <hr className="my-2" />
          <div className="text-center">
            <button onClick={()=>this.props.addProduct()} className="btn btn-primary">ADD PRODUCT</button>
          </div>
        </div>
      </div>
    );
  }
}
