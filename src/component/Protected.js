import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Protected extends Component {
    
    render() {
        var TeamLoggedin = JSON.parse(localStorage.getItem('team'));
        var AdminLoggedin = JSON.parse(localStorage.getItem('admin'));
        var PlayerLoggedin = JSON.parse(localStorage.getItem('player'));
        return (
            <div>
                {AdminLoggedin && <Redirect to="/AdminPage" />}
                {TeamLoggedin && <Redirect to="/TeamPage" />}

            </div>
        );
    }
}

export default Protected;