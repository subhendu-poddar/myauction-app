import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import '../App.css'
import Dashboard from '../Dashboard/Dashboard';
import Home from './Home';

class NavMenu extends Component {

    render() {
        var loggedin = JSON.parse(localStorage.getItem('team'))
        return (
            <div>
                <div className='navbar'>
                    <div className='container'>
                        {/* {loggedin && <Redirect to='/Home' />} */}
                        { !loggedin &&
                            <div className='navbar-container'>
                                {/*<Link to="Home"> Home</Link>*/}
                                <Link className='navbar-brand' to="/register">Team Registration</Link>
                                <Link className='navbar-brand' to="/login">Team Login</Link>
                                <Link className='navbar-brand' to="/players-registration">Players Registration</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NavMenu;