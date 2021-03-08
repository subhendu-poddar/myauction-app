import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './Profile'
import Players from "./Players"
import Navigation from "./Navigation"
import Leaderboard from "./Leaderboard"
import Auction from "./Auction"

function Dashboard() {
    return (
        <div className="Dashboard">
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
    );
}

export default Dashboard;