import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import '../App.css'
import Dashboard from '../Dashboard/Dashboard';
import Home from './Home';

class NavMenu extends Component {

    render() {
        var TeamLoggedin = JSON.parse(localStorage.getItem('team'))
        var AdminLoggedin = JSON.parse(localStorage.getItem('admin'))
        var PlayerLoggedin = JSON.parse(localStorage.getItem('player'))
        return (
            <div>
                { !TeamLoggedin && !AdminLoggedin && !PlayerLoggedin &&
                    <div className='navbar'>
                        <div className='container'>
                            <div className='navbar-container'>
                                {/*<Link to="Home"> Home</Link>*/}
                                <Link className='navbar-brand' to="/register">Team Registration</Link>
                                <Link className='navbar-brand' to="/login">Team Login</Link>
                                <Link className='navbar-brand' to="/players-registration">Players Registration</Link>
                                <Link className='navbar-brand' to='/admin/signin'>Admin</Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default NavMenu;