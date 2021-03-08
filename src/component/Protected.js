import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Protected extends Component {
    render() {
        var loggedin = JSON.parse(localStorage.getItem('login'));
        return (
            <div>
                {loggedin ? <Redirect to="/Home" /> : null}
            </div>
        );
    }
}

export default Protected;