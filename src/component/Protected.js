import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Protected extends Component {
    
    render() {
        var TeamLoggedin = JSON.parse(localStorage.getItem('team'));
        var AdminLoggedin = JSON.parse(localStorage.getItem('admin'));
        var PlayerLoggedin = JSON.parse(localStorage.getItem('player'));
        return (
            <div>
                {TeamLoggedin && <Redirect to="/TeamPage" />}
                {AdminLoggedin && <Redirect to="/AdminPage" />}

            </div>
        );
    }
}

export default Protected;