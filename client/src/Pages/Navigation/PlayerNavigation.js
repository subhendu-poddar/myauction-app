import React, { Component } from 'react'
import { Link } from "react-router-dom"
//import { Navbar, Nav } from "react-bootstrap"


class Navigation extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container'>
                    <div className='navbar-container'>
                        {/* <Link className='navbar-brand' to="/Auction">Auction</Link> */}
                        {/*<Link className='navbar-brand' to="/Profile">Profile</Link>*/}
                        <Link className='navbar-brand' to="/PlayerProfile">Profile</Link>
                        <Link className='navbar-brand' to="/Players">Players</Link>
                        <Link className='navbar-brand' to="/Leaderboard">Leaderboard</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;