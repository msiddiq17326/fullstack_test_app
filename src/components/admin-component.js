import React, { Component } from 'react';
import axios from 'axios';

const Users = props => (
  <tr>
    <td>{props.user.firstname}</td>
    <td>{props.user.lastname}</td>
    <td>{props.user.address}</td>
    <td>{props.user.telephonenumber}</td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/admin/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  usersList() {
    return this.state.users.map(e => {
      return <Users user={e} key={e._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Registered Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            { this.usersList() }
          </tbody>
        </table>
      </div>
    )
  }
}