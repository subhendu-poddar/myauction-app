import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import NavMenu from './component/NavMenu'
import Register from './component/Register'
import PlayersRegistration from './component/PlayersRegistration.js'

function App() {
  return (
    <div className="App">
      <Router>

        {/*<LogOut />*/}
        <NavMenu/>

        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/players-registration'>
            <PlayersRegistration />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
          
        </Switch>


      </Router>

    </div>
  );
}

export default App;
