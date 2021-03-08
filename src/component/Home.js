import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'

class Home extends Component {
    render() {
        var loggedin = JSON.parse(localStorage.getItem('team'));
        return (
            <div>
                {loggedin?null:<Redirect to='/login'/>}
                Welcome to Home!!
                <Dashboard/>
            </div>
        );
    }
}

export default Home;