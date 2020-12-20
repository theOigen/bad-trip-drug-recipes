import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute'
import Main from './components/main/Main'
import { Login } from './components/login/Login'
import { WelcomePage } from './layout/welcome-page/WelcomePage'
import { CreateRecipe } from './components/recipes/CreateRecipe'
import { Sign } from './components/recipes/Sign'
import AuthState from './context/auth/AuthState'
import RecipesState from './context/recipes/RecipesState'
import AppointmentsState from './context/appointments/AppointmentsState'
import setAuthToken from './utils/setAuthToken';

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt);
}

axios.defaults.baseURL = 'http://192.168.0.105:3005'

const App = () =>(
  <AuthState>
    <RecipesState>
      <AppointmentsState>
        <Router>
          <Main>
            <Switch>
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/' component={WelcomePage} />
              <PrivateRoute exact path='/create-recipe' component={CreateRecipe} />
              <PrivateRoute exact path='/sign-page' component={Sign} />
            </Switch>
          </Main>
        </Router>
      </AppointmentsState>
    </RecipesState>
  </AuthState>
)

export default App;
