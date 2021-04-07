import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Protected extends Component {
    render() {
        var teamLoggedin = JSON.parse(localStorage.getItem('team'));
        return (
            <div>
                {teamLoggedin && <Redirect to="/TeamPage" /> }
            </div>
        );
    }
}

export default Protected;