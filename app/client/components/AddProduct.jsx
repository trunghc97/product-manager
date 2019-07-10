import React, { Component } from 'react';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    var {product_name,product_price,image} = this.state;
    this.props.addProductAction(product_name,product_price,image);
  }

  render() {
    return (
      <div className="container">
        <form >
          <div className="form-group">
            <label htmlFor="product_name">Tên sản phẩm</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Giá sản phẩm</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhập giá sản phẩm" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Đường link ảnh sản phẩm</label>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhập ảnh sản phẩm" />
          </div>
          <button type="reset" onClick={()=>this.handleClick()} className="btn btn-block btn-info">Thêm mới</button>
        </form>
      </div>
    );
  }
}
