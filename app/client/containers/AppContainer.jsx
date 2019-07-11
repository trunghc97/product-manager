import React, { Component } from 'react';
import App from '../components/App';
import path from '../config/path'
import axios from 'axios';

export default class AppContainer extends Component {
  state = {
    data: null,
    isEdit: false,
    product_name:'',
    product_price:'',
    image:''
  }

  componentWillMount() {
    this.setState({data: this.props});
  }

  addProductAction = (name, price, image) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.post(path.root(),{product: {name,price,image}}, {
      headers: {'X-CSRF-Token': token}
    }).then(resp => {
      this.setState({data: resp.data});
    });
  }

  deleteProductAction = (id) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.delete(path.delete(id),{headers: {'X-CSRF-Token': token}}).then((resp) => {
      this.setState({data: resp.data});
    });
  }

  editProductAction = (id, name, price, image) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.put(path.edit(id),{product: {id,name,price,image}},{
      headers: {'X-CSRF-Token': token}
    }).then((resp) => {
      this.setState({data: resp.data});
    });
  }

  addProduct = () => {
    this.setState({ isEdit: false })
  }

  render() {
    return (
      <App
      data={this.state.data}
      isEdit={this.state.isEdit}
      addProductAction = {this.addProductAction}
      addProduct = {this.addProduct}
      deleteProductAction = {this.deleteProductAction}
      editProductAction = {this.editProductAction} />
    )
  }
}
