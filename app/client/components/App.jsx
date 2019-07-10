import React, { Component } from 'react';
import Product from './Product'
import AddProduct from './AddProduct'
import Header from './Header';
import Footer from './Footer'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    this.setState({ data: Object.values(this.props.data) });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
      this.setState({ data: Object.values(this.props.data) });
    }
  }

  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((item, index)=>
         (<Product
           deleteProductAction = {this.props.deleteProductAction}
           key={index}
           id ={item.id}
           product_name={item.name}
           product_price={item.price}
           image={item.image}   />)
       )
    }
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <AddProduct addProductAction = {this.props.addProductAction} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
