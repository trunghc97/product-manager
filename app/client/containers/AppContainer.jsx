import React, { Component } from 'react';
import App from '../components/App';
import path from '../config/path'
import axios from 'axios';

export default class AppContainer extends Component {
  state = {
    data: null,
    product_name:'',
    product_price:'',
    image:''
  }

  componentWillMount() {
    this.setState({data: this.props});
  }

  addProductAction = (name, price, image) => {
    var tempData = {};
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.post('/products',{product: {name,price,image}}, {
      headers: {'X-CSRF-Token': token}
    }).then(resp => {
      this.setState({data: resp.data});
    });
  }

  render() {
    return (
      <App
      data={this.state.data}
      addProductAction = {this.addProductAction} />
    )
  }
}
