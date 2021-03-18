import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'

class NavMenu extends Component {

    logout = () =>{
        /*alert("Logged Out Successfully");*/
        localStorage.clear();
        window.location.href = '/home'
    }


    render() {
        var loggedin = JSON.parse(localStorage.getItem('team'))
        return (
            loggedin?
            <div>
                {/*<Link to="Home"> Home</Link>*/}
                <Link to="/logout" onClick={this.logout}>Log Out</Link>
               
            </div>
                :
                <div>
                    {/*<Link to="Home"> Home</Link>*/}
                    <Link to="/register">Team Registration</Link>
                    <Link to="/login">Team Login</Link>
                    <Link to="/players-registration">Players Registration</Link>
                </div>
        );
    }
}

export default NavMenu;