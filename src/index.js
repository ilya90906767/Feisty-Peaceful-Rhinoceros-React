import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Myroutes from './views/myroutes'
import RedMyRoute from './views/red-my-route'
import LogIn from './views/log-in'
import Land from './views/land'
import Reviews from './views/reviews'
import AllRev from './views/all-rev'
import Profile from './views/profile'
import Map from './views/map'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/2" />
        <Route component={Myroutes} exact path="/myroutes" />
        <Route component={RedMyRoute} exact path="/red-my-route" />
        <Route component={LogIn} exact path="/1" />
        <Route component={Land} exact path="/" />
        <Route component={Reviews} exact path="/reviews" />
        <Route component={AllRev} exact path="/all-rev" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Map} exact path="/map" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
