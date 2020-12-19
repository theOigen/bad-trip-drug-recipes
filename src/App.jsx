import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/login/Login'
import AuthState from './context/auth/AuthState'

const App = () =>(
  <AuthState>
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  </AuthState>
)

export default App;
