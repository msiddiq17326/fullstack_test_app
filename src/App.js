import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from './components/create-user-component';
import Navbar from './components/navbar.component';
import AdminGetUsers from './components/admin-component';
import LoginPage from './components/login-component';
import SignUp from './components/signup-component';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/user" component={CreateUser} />
        <Route path="/admin" component={AdminGetUsers} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
