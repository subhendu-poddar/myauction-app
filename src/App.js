<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Protected from './component/Protected'
import NavMenu from './component/NavMenu'
import Register from './component/Register'
import PlayersRegistration from './component/PlayersRegistration.js'
>>>>>>> 60a5c9f3e1e29e453fed714d64746de6eb864a2a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
            <Login />
          </Route>
          
        </Switch>


      </Router>

>>>>>>> 60a5c9f3e1e29e453fed714d64746de6eb864a2a
    </div>
  );
}

export default App;
