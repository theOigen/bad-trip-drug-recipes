import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/login/Login'
import { WelcomePage } from './layout/welcome-page/WelcomePage'
import AuthState from './context/auth/AuthState'
import RecipesState from './context/recipes/RecipesState'
import AppointmentsState from './context/appointments/AppointmentsState'

const App = () =>(
  <AuthState>
    <RecipesState>
      <AppointmentsState>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/main' component={WelcomePage} />
          </Switch>
        </Router>
      </AppointmentsState>
    </RecipesState>
  </AuthState>
)

export default App;
