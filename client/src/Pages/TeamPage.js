import React, { Component } from 'react'
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import TeamProfile from '../Dashboard/TeamProfile'
import Players from "../Dashboard/Players"
import Navigation from "./Navigation/TeamNavigation"
import Leaderboard from "../Dashboard/Leaderboard"

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
          <HashRouter>
            <Navigation />

            <Switch>
              {/* <Route path='/Auction'> <Auction/> </Route> */}
              <Route path='/Leaderboard'> <Leaderboard/> </Route>
              <Route path='/TeamProfile'> <TeamProfile/> </Route>
              <Route path='/Players'> <Players/> </Route>
              <Route path="/"> {null} </Route>

            </Switch>
          </HashRouter>
        </div>

      </div>
    );
  }
}

export default TeamPage;