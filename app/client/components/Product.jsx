import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div className="col-3 product-item"
        onClick={()=> this.props.handleEdit(this.props.id, this.props.product_name, this.props.product_price, this.props.image)}>
        <div className="card text-left">
          <button onClick={()=>this.props.deleteProductAction(this.props.id)} className="btn btn-danger button-delete">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className= "item-edit">
            <img className="card-img-top" src={this.props.image} alt={this.props.product_name} />
            <div className="card-body">
              <b className=" float-left">
              {this.props.product_name}
               </b>
              <i className=" float-right">
              {this.props.product_price} đ
               </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
