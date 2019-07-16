import React, { Component } from 'react';
import axios from 'axios';
import path from '../config/path';
import SideBar from '../components/SideBar';
import SignUp from '../components/SignUp';

export default class SideBarContainer extends Component {
  state = {
    data: null,
    current_user: ''
  }

  componentWillMount() {
    this.setState({
      current_user: this.props.current_user
    })
  }

  handleSignIn = (email,password) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.post(path.sign_in(),{email,password}, {
      headers: {'X-CSRF-Token': token}
    }).then(resp => {
      this.setState({
        data: resp.data.data,
        current_user: resp.data.current_user
      });
      window.location.href = path.root();
    });
  }

  handleSignUp = (name, email, password) => {
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.post(path.sign_up(), {name,email,password}, {
      headers: {'X-CSRF-Token': token}
    }).then(resp => {
      this.setState({
        data: resp.data.data,
        current_user: resp.data.current_user
      });
      window.location.href = path.root();
    });
  }

  logout = () => {
    axios.delete(path.log_out()).then(res => {
        window.location.href = path.root()
    });
  }

  render () {
    return (
      <SideBar
        current_user = {this.state.current_user}
        handleSignIn = {this.handleSignIn}
        handleSignUp = {this.handleSignUp}
        logout = {this.logout} />
    )
  }
}
