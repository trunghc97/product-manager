import React, { Component } from 'react';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product_name:'',
        product_price:'',
        image:''
    }
  }

  componentWillMount() {
    this.setState({
      product_name: this.props.product_name,
      product_price: this.props.product_price,
      image: this.props.image
    })
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      this.setState({
        product_name: this.props.product_name,
        product_price: this.props.product_price,
        image: this.props.image
      })
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
    var {product_name,product_price,image} = this.state;
    this.props.editProductAction(this.props.id, product_name, product_price, image);
    this.setState({
      product_name:'',
      product_price:'',
      image:''
    })
  }

  render() {
    return (
      <div className="container">
        <form >
          <div className="form-group">
            <label htmlFor="product_name">Product Name</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="product_name"
              id="product_name" aria-describedby="name_text" value={this.state.product_name} />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Product Price</label>
            <input onChange={(event)=> this.isChange(event)} type="number" className="form-control" name="product_price"
              id="product_price" aria-describedby="name_text" value={this.state.product_price} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="image"
              id="image" aria-describedby="name_text" value={this.state.image} />
          </div>
          <button type="reset" onClick={()=>this.handleClick()} className="btn btn-block btn-info">Update Product</button>
        </form>
      </div>
    );
  }
}
