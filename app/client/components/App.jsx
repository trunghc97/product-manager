import React, { Component } from 'react';
import Product from './Product'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    this.setState({ data: Object.values(this.props) });
  }

  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((item, index)=>
         (<Product
           key={index}
           product_name={item.name}
           product_price={item.price}
           image={item.image}   />)
       )
    }
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              {this.printData()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
