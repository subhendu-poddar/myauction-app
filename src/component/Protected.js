import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Protected extends Component {
    render() {
        var loggedin = JSON.parse(localStorage.getItem('team'));
        return (
            <div>
                {loggedin && <Redirect to="/Home" /> }
            </div>
        );
    }
}

export default Protected;