import React, { Component } from 'react';
import Product from './Product'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import Header from './Header';
import Footer from './Footer'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isEdit: false,
      id: '',
      product_name: '',
      product_price: '',
      image: ''
    }
  }
  componentWillMount() {
    this.setState({ data: Object.values(this.props.data) });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      this.setState({
        data: Object.values(this.props.data),
        isEdit: this.props.isEdit
      });
    }
  }

  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((item, index)=>
         (<Product
           handleEdit={this.handleEdit}
           deleteProductAction={this.props.deleteProductAction}
           key={index}
           id ={item.id}
           product_name={item.name}
           product_price={item.price}
           image={item.image}   />)
       )
    }
  }

  handleEdit = (id, product_name, product_price, image) => {
    this.setState({
      isEdit: true,
      id: id,
      product_name: product_name,
      product_price: product_price,
      image: image
    })
  }

  render() {
    let form;
    if(this.state.isEdit) {
      form = <EditProduct
                editProductAction={this.props.editProductAction}
                id={this.state.id}
                product_name={this.state.product_name}
                product_price={this.state.product_price}
                image={this.state.image} />
    } else {
      form = <AddProduct addProductAction = {this.props.addProductAction} />
    }

    return(
      <div>
        <Header addProduct = {this.props.addProduct} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                {form}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
