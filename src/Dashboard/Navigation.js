import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
//import { Navbar, Nav } from "react-bootstrap"


class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/Auction">Auction</Link>
                <Link to="/Leaderboard">Leaderboard</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Players">Players</Link>
            </div>
        );
    }
}

export default Navigation;