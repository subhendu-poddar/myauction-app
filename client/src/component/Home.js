import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import NavMenu from './NavMenu';

class Home extends Component {
    render() {
        var teamLoggedin = JSON.parse(localStorage.getItem('team'));
        var AdminLoggedin = JSON.parse(localStorage.getItem('admin'));
        return (
            <div>
                { AdminLoggedin && <Redirect to='/AdminPage'/> }
                { teamLoggedin && <Dashboard />}
                { !teamLoggedin && <Redirect to='/login' /> }
            </div>
        );
    }
}

export default Home;