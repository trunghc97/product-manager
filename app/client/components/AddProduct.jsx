import React, { Component } from 'react';
import Errors from './Errors'

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: [],
        product_name:'',
        product_price:'',
        image:''
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
        [name]:value
    });
  }

  handleClick = () => {
    let errors = []
    var {product_name,product_price,image} = this.state;
    if(product_name.length === 0){
      errors.push("Product name can't be empty");
    }
    if(product_name.length > 255){
      errors.push("Product name too long");
    }
    if(product_price%1 !==0) {
      errors.push("Price must be Number");
    }
    if(product_price.length === 0){
      errors.push("Price can't be empty")
    }
    if (errors.length === 0){
      this.props.addProductAction(product_name,product_price,image);
      this.setState({
        product_name:'',
        product_price:'',
        image:'',
        errors: []
      })
    } else {
      this.setState({
        errors: errors
      }, function() {})
    }
  }

  printErrors = () => {
    if(this.state.errors !== null){
      return this.state.errors.map((item, index)=> (
          <Errors
            key={index}
            error={item} />
        )
      )
    }
  }

  render() {
    return (
      <div className="container">
        <form >
          <ul>
            {this.printErrors()}
          </ul>
          <div className="form-group">
            <label htmlFor="product_name">Product Name</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Product Price</label>
            <input onChange={(event)=> this.isChange(event)} type="number" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" />
          </div>
          <button type="reset" onClick={()=>this.handleClick()} className="btn btn-block btn-info">Add Product</button>
        </form>
      </div>
    );
  }
}
