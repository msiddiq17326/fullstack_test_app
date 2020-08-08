import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Menu</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>                
                        </li>
                        <li className="navbar-item">
                            <Link to="/admin" className="nav-link">Admin Pannel</Link>                
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>                
                        </li>
                        <li className="navbar-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>                
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
