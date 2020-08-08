import React, { Component } from 'react';
import axios from 'axios';


export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      telephonenumber: '',
      address: '',
      SSN: ''
    }
  }

  onChangeFirstname = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangePhone = (e) => {
    this.setState({
      telephonenumber: e.target.value
    })
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  onChangeSSN = (e) => {
    this.setState({
      SSN: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      telephonenumber: this.state.telephonenumber,
      address: this.state.address,
      SSN: this.state.SSN,
    }

    console.log(user);

    axios.post('http://localhost:5000/user/add', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>firstname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
        </div>
        <div className="form-group"> 
          <label>lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group">
          <label>telephonenumber: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.telephonenumber}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group"> 
          <label>Full Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>

        <div className="form-group"> 
          <label>Social Security Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.SSN}
              onChange={this.onChangeSSN}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}