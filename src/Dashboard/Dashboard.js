import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from './Profile'
import Players from "./Players"
import Navigation from "./Navigation"
import Leaderboard from "./Leaderboard"
import Auction from "./Auction"

class Dashboard extends Component {

    logout = () => {
        /*alert("Logged Out Successfully");*/
        localStorage.clear();
        window.location.href = '/home'
    }



    render() {
        return (
            <div>
                <div className='navbar'>
                <div className='container'>
                <div className='navbar-container'>
                    <div className='navbar-user'>PLAYER AUCTION</div>
                    {/* <Dashboard /> */}
                    {/*<Link to="Home"> Home</Link>*/}
                    <Link className='navbar-user' to="/logout" onClick={this.logout}>Log Out</Link>
                </div>
                </div>
                </div>
                
                <div>
                    <BrowserRouter>
                        <Navigation/>
                        
                        <Switch>
                        <Route path='/Auction'>
                                <Auction />
                            </Route>
                            <Route path='/Leaderboard'>
                                <Leaderboard />
                            </Route>
                            <Route path='/Profile'>
                                <Profile/>
                            </Route>
                            <Route path='/Players'>
                                <Players/>
                            </Route>
                            <Route path="/">
                                {null}
                            </Route>
                            
                        </Switch>
                    </BrowserRouter>
                </div>
                
            </div>
        );
    }
}

export default Dashboard;