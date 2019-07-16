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
    image:'',
    current_user: ''
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  addProductAction = (name, price, image) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.post(path.root(),{product: {name,price,image}}, {
      headers: {'X-CSRF-Token': token}
    }).then(resp => {
        this.setState({
          data: resp.data.data,
          current_user: resp.data.current_user
        })
    });
  }

  deleteProductAction = (id) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.delete(path.delete(id),{headers: {'X-CSRF-Token': token}}).then((resp) => {
      this.setState({
        data: resp.data.data,
        current_user: resp.data.current_user
      });
    });
  }

  editProductAction = (id, name, price, image) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.put(path.edit(id),{product: {id,name,price,image}},{
      headers: {'X-CSRF-Token': token}
    }).then((resp) => {
        this.setState({
          data: resp.data.data,
          current_user: resp.data.current_user
        })
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
      current_user={this.props.current_user}
      addProductAction = {this.addProductAction}
      addProduct = {this.addProduct}
      deleteProductAction = {this.deleteProductAction}
      editProductAction = {this.editProductAction} />
    )
  }
}
