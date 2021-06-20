import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Players from "../Dashboard/Players"
import Navigation from "./Navigation/PlayerNavigation"
import Leaderboard from "../Dashboard/Leaderboard"
import Auction from "../Dashboard/Auction"
import PlayerProfile from '../Dashboard/PlayerProfile'

class TeamPage extends Component {

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
            <Navigation />

            <Switch>
              // <Route path='/Auction'> <Auction/> </Route>
              <Route path='/Leaderboard'> <Leaderboard/> </Route>
              <Route path='/PlayerProfile'> <PlayerProfile/> </Route>
              <Route path='/Players'> <Players/> </Route>
              <Route path="/"> {null} </Route>

            </Switch>
          </BrowserRouter>
        </div>

      </div>
    );
  }
}

export default TeamPage;