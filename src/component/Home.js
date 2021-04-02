import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import NavMenu from './NavMenu';

class Home extends Component {
    render() {
        var loggedin = JSON.parse(localStorage.getItem('team'));
        return (
            <div>
                { !loggedin && <Redirect to='/login' /> }
                { loggedin && <Dashboard /> }
            </div>
        );
    }
}

export default Home;