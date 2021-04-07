import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import NavMenu from './component/NavMenu'
import Register from './component/Register'
import PlayersRegistration from './component/PlayersRegistration'
import Protected from './component/Protected'
import Admin from './component/Admin'
import AdminPage from './Pages/AdminPage'
import TeamPage from './Pages/TeamPage'

function App() {

  return (
    <div>
      <Router>

        <Protected/>
        <NavMenu/>

        <Switch>
          <Route path='/home'> <Home/> </Route>
          <Route path='/register'> <Register/> </Route>
          <Route path='/login'> <Login/> </Route>
          <Route path='/players-registration'> <PlayersRegistration/> </Route>
          <Route path='/admin/signin'> <Admin/> </Route>
          <Route path='/AdminPage'> <AdminPage/> </Route>
          <Route path='/TeamPage'> <TeamPage/> </Route>
          <Route path='/'> <Home/> </Route>
          
        </Switch>


      </Router>

    </div>
  );
}

export default App;
